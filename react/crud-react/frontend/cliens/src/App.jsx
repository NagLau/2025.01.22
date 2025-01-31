import {BrowserRouter, Route, Routes}from 'react-router-dom'
import Home from './home'
import Regiok from './regiok'
import './App.css'
 
function App() {
 
/*
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
   
  )
  */
return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/regiok" element={<Regiok/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}
 
export default App