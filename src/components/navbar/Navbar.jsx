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
                            <img src="https://images.unsplash.com/photo-1636123313721-d5587afbb084?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" alt="" />
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
                    <i className="fa-solid fa-users-rectangle" ></i>
                     <p>{alart.community}</p>
                </div> 
                : <i className="fa-solid fa-users-rectangle" ></i>}
                
            </div>          
        </nav>

          
        
    </div>
  )
}

export default Navbar
