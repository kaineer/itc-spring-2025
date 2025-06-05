import './App.css'
import { Square } from './components/Square'
import { Mover } from './components/Mover'

function App() {
  return (
    <>
      <Square left={100} top={100} />
      <Square left={300} top={100} />
      <Mover />
    </>
  )
}

export default App
