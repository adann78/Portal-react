
import { Modal } from './components/Modal.tsx'
import { useState, useEffect } from 'react'
import './App.css'
import { useModalContext } from './components/context/ModalContext'
import { PromiseError } from './components/PromiseError'
import { getCharacter } from './services/api.service'
import { Character } from './models/character.model'
import { emptyCharacter } from './models/character.model'
import { useApi } from './components/hooks/useApi'
function App() {
  /*const [data, setData] = useState<Character>(emptyCharacter)
  const fetchMorty = async () => {
    const { call } = getCharacter(1)
    const result = await call
    setData(result.data)
  }

  useEffect(() => {
    fetchMorty()

  }, [])
*/
  const { setState } = useModalContext()

  const openModal = () => {
    setState(true);
  }

  const { data, loading, error, fetch } = useApi<Character>(getCharacter(1))
  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error</h2>
  }
  return (<>

    <Modal>
      <h2>Hola Adan</h2>
      <h3>Bienvenido</h3>

    </Modal>

    <button onClick={openModal}>Abrete Sésamo</button>
    {/*<PromiseError />*/}
    {JSON.stringify(data)}
    <button onClick={fetch}>Fetch</button>

  </>

  )

}
export default App
