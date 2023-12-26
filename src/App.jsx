import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [categories, setCategories] = useState(0)
  useEffect(() =>{
    fetch(`http://localhost:5173/`)
    .then(response => response.json())
    .then(data => setCategories(data))

  } , [])

  return (
    /* --fragment -- */
    <>
    {categories && categories.map((categories)=><p>key={catgories.name}</p>)}

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Hello World!</h1>
      <h1>{number}</h1>
      <button onClick={()=>setNumber((number)=>number+1)}>+</button>
      <button onClick={()=>setNumber((number)=>number-1)}>-</button>
    </>
  )
}

export default App
