import { useState, useEffect } from "react"

export const PromiseError = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            throw new Error("Error al cargar los datos")
        }
        fetchData().catch(error => {
            setData(error.message)
            throw new Error("La promesa falló")
        })


    })
    return <div>{data}</div>
}

