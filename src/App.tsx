
import { Modal } from './components/Modal.tsx'
import './App.css'
import { useModalContext } from './components/context/ModalContext'

function App() {
  const {setState}=useModalContext()

  const openModal=()=>{
    setState(true);
  }

  return (<>

      <Modal>
          <h2>Hola Adan</h2>
          <h3>Bienvenido</h3>
          
      </Modal>
      <button onClick={openModal}>Abrete Sésamo</button>
  </>
   
  )

}
export default App
