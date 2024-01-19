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
            <img src="https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/358688074_1938827266497106_4278371578654537135_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGXEEUohdXNG58w6Fvyxhtib7F0ZmB_13dvsXRmYH_Xd26nItW8eA2DGdRTz31IULnuVM4iY9bOHXdqoqUMUYqs&_nc_ohc=HNDOrnVLd0QAX-3LW29&_nc_ht=scontent.fkkc2-1.fna&oh=00_AfDAO-GdxKiZDFTpZKQH25FrfmKP8KTjEEbazNnlZHMzqQ&oe=65AC1CFC" alt="" />
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