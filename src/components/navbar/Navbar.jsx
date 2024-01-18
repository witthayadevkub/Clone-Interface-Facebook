import React from 'react'
import './Navbar.css'

//react-icon
import { RiMessengerLine } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

import { TiHome } from "react-icons/ti";
import { FaBars, FaSearch, FaUserFriends} from "react-icons/fa";
const Navbar = () => {
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

                <div className="friend">
                    <i >  <FaUserFriends /> </i>
                   
                </div>

                <div className="box-icon">
                    <i><RiMessengerLine/></i>
                    <p>1</p>
                    </div>

                <div className="box-icon">
                    <i><MdOndemandVideo/></i>
                    <p>9</p>
                </div>

                <div className="box-icon">
                    <i><IoNotificationsOutline/></i>
                    <p>10</p>
                </div>

                <div className="community">
                    <i class="fa-solid fa-users-rectangle" ></i>
                     
                </div>
            </div>          
        </nav>

          
        
    </div>
  )
}

export default Navbar
