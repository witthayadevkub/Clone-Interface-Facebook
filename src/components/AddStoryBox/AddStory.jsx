import React,{useState} from 'react'
import { IoIosAddCircle } from "react-icons/io";
import './AddStory.css'
const AddStory = () => {

    // const [showStory, setShowStory] = useState([])

  
    const story = [
        {
            name: 'John',
            img: 'john.jpg'
        },
        {
            name: 'Alice',
            img: 'alice.jpg'
        },
        {
            name: 'Bob',
            img: 'bob.jpg'
        },
        {
            name: 'Alice',
            img: 'alice.jpg'
        },
        {
            name: 'Alice',
            img: 'alice.jpg'
        },
        {
            name: 'Alice',
            img: 'alice.jpg'
        },
      
       
    ]

    // setShowStory(story)
    console.log(story)

  return (
    <div>
        <div className="box-story">

            
                <div className="addyour story">
                     
                    <div className="img">
                        
                    </div>
                    <p><IoIosAddCircle /></p>
                
                     <h4>Add to <br/>story</h4>
                </div>

               
                    {story.map(story => (
                        <div className="other story">
                            <p>{story.name}</p>
                        </div>
                    ))}
               
           
        </div>
    
    </div>
  )
}

export default AddStory