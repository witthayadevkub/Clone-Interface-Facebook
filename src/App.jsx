// import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Mind from './components/MindBox/Mind'
import AddStory from './components/AddStoryBox/AddStory'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='size'>

        <header>
          <Navbar/>
          <Mind/>
        </header>
   
        <section>
          <AddStory/>
        </section>
    </div>
  )
}

export default App
