import { useState } from 'react'
import './App.css'
import Generator from './components/Generator/Generator';
import Story from './components/Story';
import { storyData } from './components/StoryData';
import GameStart from './pages/GameStart';

function App() {

  return (
    <>
      <header>
        <h1>Take A Walk to Find Yourself</h1>
      </header>
      <main>
        <GameStart />
        {/* <Story storyData={storyData} /> */}
        {/* <Generator /> */}
      </main>
      <footer>

      </footer>

    </>
  )
}

export default App
