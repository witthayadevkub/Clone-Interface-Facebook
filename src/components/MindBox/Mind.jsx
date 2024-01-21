import React,{useState} from 'react'
import "./Mind.css"
import { ImFilePicture } from "react-icons/im";


const Mind = () => {

    const [mind,setMind] = useState()

    const handleChange = (e) => {
        setMind(e.target.value)
    }
    
  return (
    <div className="box">
        <div className="img">
            <img src="https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p></p>
        </div>

        <div className="input">
            <input type="text" id="mind" name="mind" placeholder="What's on your mind?"  onChange={handleChange} ></input>
        </div>

        <div className="photo">
            <i><ImFilePicture /></i>
            <p>Photo</p>
        </div>
    </div>
  )
}

export default Mind