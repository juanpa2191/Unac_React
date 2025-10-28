import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/saludo'
import InputText from './components/inputText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Saludo nombre="Carlos" />
        <InputText value="Texto de ejemplo" label="Masa corporal" />
        <InputText value="Texto de ejemplo" label="Altura (cm) " />
        <InputText value="Texto de ejemplo" label="Velocidad" />
        <InputText value="Texto de ejemplo" label="Vuelta a la cancha" />
        <InputText value="Texto de ejemplo" label="Porcentaje de grasa" />
        <InputText value="Texto de ejemplo" label="Cardio" />

        <Saludo nombre='Bienvenido'></Saludo>
        <InputText value="Texto de ejemplo" label="Usuario" />
        <InputText value="Texto de ejemplo" label="Contraseña" />
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
