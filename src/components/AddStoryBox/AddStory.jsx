import React,{useState} from 'react'
import { IoIosAddCircle } from "react-icons/io";
import './AddStory.css'
const AddStory = () => {

    // const [showStory, setShowStory] = useState([])

  
    const story = [
        {
            name: 'othar user1',
            userphoto: 'https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            img: 'https://images.unsplash.com/photo-1705615502461-032a467f0fc8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'othar user2',
            userphoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            img: 'https://images.unsplash.com/photo-1705648462708-ffadf36617ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'othar user3',
            userphoto: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            img: 'https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'othar user4',
            userphoto: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            img: 'https://images.unsplash.com/photo-1705310683793-69a58304e5ce?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'othar user5',
            userphoto: '',
            img: 'https://images.unsplash.com/photo-1705518648497-e4ea72bcb27d?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'othar user6',
            userphoto: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            img: 'https://images.unsplash.com/photo-1682687979601-082a1295b78f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
      
       
    ]

    // setShowStory(story)
    console.log(story)

  return (
    <div>
        <div className="boxstory">

            
                <div className="addyour story">
                     
                    <div className="img">
                        
                    </div>
                    <p><IoIosAddCircle /></p>
                
                     <h4>Add to <br/>story</h4>
                </div>

               
                    {story.map((story, index ) => (
                        <div className="other story">

                            <div className="otherimg">
                                <img src={story.userphoto} alt="" />
                            </div>

                           
                            <p key={index}>{story.name}</p>
                            <img className='storyphotoback' src={story.img} alt="" />
                        </div>
                    ))}
               
           
        </div>
    
    </div>
  )
}

export default AddStory