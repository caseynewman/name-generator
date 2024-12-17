import { useState } from 'react'
import './App.css'
import Generator from './components/Generator/Generator';
import Story from './pages/Story';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        <h1>Take A Walk to Find Yourself</h1>
      </header>
      <main>
        <Outlet />
        {/* <Story storyData={storyData} /> */}
        {/* <Generator /> */}
      </main>
      <footer>

      </footer>

    </>
  )
}

export default App
