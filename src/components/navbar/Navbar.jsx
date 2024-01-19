import React from 'react'

import './Navbar.css'

//react-icon
import { RiMessengerLine } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

import { TiHome } from "react-icons/ti";
import { FaBars, FaSearch, FaUserFriends} from "react-icons/fa";

import { useState } from 'react'


const Navbar = () => {

    const [alart, setAlart] = useState({

        chat:1,
        friends:0,
        video:9,
        notification:10,
        community:0,

    })


    // setAlartChat(1)

  return (
    <div>
        <nav className='layout'>


            <div className="topNav">
                    <div className="logo">
                            {/* <h1>facebook</h1> */}
                            <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" />
                    </div>

                        <div className="nav-topleft">
                            <div className="iconNav">
                                <FaSearch />
                            </div>
                            <div className="iconNav">
                            <FaBars/>
                            </div>
                        </div>

            </div>  

            <div className="menu">
                <div className="home">
                    
                    <i><TiHome/></i>
                    <p></p>
                </div>

                {alart.friends !== 0 ? 
                <div className="box-icon">
                   <i >  <FaUserFriends /> </i>
                    <p>{alart.friends}</p>
                </div>
                : <i >  <FaUserFriends /> </i>}
                

                {alart.chat !== 0 ? 
                <div className="box-icon">
                    <i><RiMessengerLine/></i>
                    <p>{alart.chat}</p>
                </div> 
                : <i><RiMessengerLine/></i>}
                
                {alart.video !== 0 ? 
                <div className="box-icon">
                    <i><MdOndemandVideo/></i>
                    <p>{alart.video}</p>
                </div>
                : <i><MdOndemandVideo/></i>}
                

                {alart.notification !== 0 ? 
                <div className="box-icon">
                    <i><IoNotificationsOutline/></i>
                    <p>{alart.notification}</p>
                </div>
                : <i><IoNotificationsOutline/></i>}
                

                {alart.community != 0 ? 
                <div className="box-icon">
                    <i class="fa-solid fa-users-rectangle" ></i>
                     <p>{alart.community}</p>
                </div> 
                : <i class="fa-solid fa-users-rectangle" ></i>}
                
            </div>          
        </nav>

          
        
    </div>
  )
}

export default Navbar
