import { useState, useRef, useContext, useEffect } from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./context/ModalContext"
import "./Modal.css"

interface Props {
    children: React.ReactNode
}
const eventListener = "keydown"
const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
}
export const Modal = ({ children }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const { state, setState } = useModalContext()

    const closeModal = () => { setState(false) }
    const modalRoot = document.getElementById("modal")
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setState(false)
                throw new Error("La derecha sigue siendo la derecha")
            }
        }
        if (state) {
            document.addEventListener(eventListener, handleEsc)
        }
        return () => {
            document.removeEventListener(eventListener, handleEsc)
        }
    }, [setState, state])
    if (!state || !modalRoot) {
        return null;
    }
    return createPortal(
        <div className="overlay" onClick={closeModal}>
            <div className="modal" onClick={handleContentClick} ref={modalRef}>
                {children}
                <button className="close-button" onClick={closeModal}>Cerrar</button>

            </div>
        </div>, modalRoot)
}

