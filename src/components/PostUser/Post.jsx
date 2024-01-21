import React,{useState, useContext} from 'react'
import './Post.css'
import { DataUser } from '../../App';

//icons
import { GoComment } from "react-icons/go";
import { PiShareFatLight } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";

const Post = () => {

     const userInfo = useContext(DataUser)
  
    const [seeMore, setSeeMore] = useState(true)

    const usersWithPosts = userInfo.filter(user => user.post.length > 0);
    const user = usersWithPosts.map(user => user.post)
    console.log(usersWithPosts)
    console.log(user)
    
  
    const checkSeeMore = () => {
        setSeeMore((check)=> !check)
    }

  return (  
        <div className='postBox'>
            {usersWithPosts.map((post, index) => (
                <div key={index}>
                    
                        {post.post?.map((post, index) => (
                            <div key={index}>
                                <div className='headpost'>
                                    <img src={post.userphoto} alt={post.name} />
                                    <h3>{post.name}</h3>
                                    <i className="material-icons">more_horiz</i>
                                </div>
                               
                                    {post.textpost&& <div className="textpost">

                                        {post.textpost.length >= 20 && seeMore === true
                                        ? <div>
                                            <p onClick={checkSeeMore}>{post.textpost.slice(0, 20)} <span>.... See More</span></p>
                                           
                                        </div>
                                        :<div>
                                            <p onClick={checkSeeMore}>{post.textpost}</p>
                                        </div>}
                                        
                                    </div>}
                                
                                <div className='boxpost'>
                                    <img src={post.photopost} alt={post.name} />
                                </div>
                               
                                <div className='buttonpost'>
                                    

                                    <div className="layout-emoji">
                                        {post.reaction?.map((reaction, index) => 
                                        <div key={index}>

                                        {reaction.count !== 0 && (
                                        <div>
                                            {['like', 'love', 'care', 'haha', 'wow', 'sad', 'angry'].map((reactionType,index) => (
                                            reaction.name === reactionType && (
                                                <div key={index+1} className="emoji">
 
                                                        <img src={reaction.emoji} alt={reaction.name} />
                                                        
                                                </div>
                                            )
                                            ))}
                                            
                                        </div>)}

                                        </div>)}
                                         <span>{post.reaction?.reduce((accumulator, reaction) => accumulator + reaction?.count , 0)}</span>    
                                    </div>
                                       
                                   
                                   <div className="community">
                                        <div className='con'>
                                            <i><AiOutlineLike /></i>
                                            <span>{post.reaction?.reduce((accumulator, reaction) => accumulator + reaction?.count , 0)}</span>    
                                        </div>
                                        <div className='con'>
                                            <i><GoComment /></i>
                                            <span>{post.comment}</span>   
                                        </div>
                                        <div className='con'>
                                            <i><PiShareFatLight /></i>
                                            <span>{post.sharecount}</span>
                                        </div>
                                   </div>
                                </div> 
                            </div>
                        ))}       
                </div>
            ))}
        </div>
    
  )
}

export default Post