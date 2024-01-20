import { useState, createContext } from 'react'

import Navbar from './components/navbar/Navbar'
import Mind from './components/MindBox/Mind'
import AddStory from './components/AddStoryBox/AddStory'
import Post from './components/PostUser/Post'

import './App.css'
//data
import { Data } from './DataUser/DataUser'
export const DataUser = createContext()


function App() {

  

  return (
    <DataUser.Provider value={Data}>

        <div className="size">
          <header>
            <Navbar/>
            <Mind/>
          </header>
    
          <section>
            <AddStory/>
            <Post/>
          </section>
        </div>
        
    </DataUser.Provider>
  )
}

export default App
