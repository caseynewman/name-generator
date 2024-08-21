import { useState } from 'react'
import './App.css'
import { userNames } from './components/nameList';

function App() {
  const [names, setNames] = useState(userNames);


  return (
    <>
      <h1>Woodland Name Generator</h1>
        <p>
          Here's a paragraph ~
        </p>
    </>
  )
}

export default App
