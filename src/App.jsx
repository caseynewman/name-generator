import { useState } from 'react'
import './App.css'
import Generator from './components/Generator/Generator';
import Story from './components/Story';
import { storyData } from './components/StoryData';

function App() {

  return (
    <>
      <header>
        <h1>Woodland Name Generator</h1>
      </header>
      <main>
        <Story storyData={storyData} />
        {/* <Generator /> */}
      </main>
      <footer>

      </footer>

    </>
  )
}

export default App
