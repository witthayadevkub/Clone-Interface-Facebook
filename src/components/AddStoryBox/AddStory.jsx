import React,{useState , useContext} from 'react'
import { IoIosAddCircle } from "react-icons/io";
import './AddStory.css'


import { DataUser } from '../../App';



const AddStory = () => {

    const userInfo = useContext(DataUser)
    


  return (
    <div>
        <div className="boxstory">

            
                <div className="addyour story">
                     
                    <div className="img">
                        
                    </div>
                    <p><IoIosAddCircle /></p>
                
                     <h4>Add to <br/>story</h4>
                </div>

               
                    {userInfo.map((story, index ) => (
                        <div key={index} className="other story">

                            <div className="otherimg">
                                <img src={story.userphoto} alt={story.name} />
                            </div>

                           
                            <p key={index}>{story.name}</p>
                            <img className='storyphotoback' src={story.storyImg} alt={story.name} />
                        </div>
                    ))}
               
           
        </div>
    
    </div>
  )
}

export default AddStory