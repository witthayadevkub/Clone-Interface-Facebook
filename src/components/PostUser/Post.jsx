import React,{useState, useContext} from 'react'
import './Post.css'
import { DataUser } from '../../App';

const Post = () => {

     const userInfo = useContext(DataUser)
    //  const fiterPost = userInfo.post.fiter((post)=>{
            
    //  })

    const usersWithPosts = userInfo.filter(user => user.post.length > 0);
    console.log(usersWithPosts)
  


  return (

    
    
        <div className='postBox'>

            {usersWithPosts.map((post, index) => (
                <div key={index}>
                    
                        {post.post.map((post, index) => (
                            <div key={index}>
                                <div className='headpost'>
                                    <img src={post.userphoto} alt={post.name} />
                                    <h3>{post.name}</h3>
                                    <i class="material-icons">more_horiz</i>
                                </div>
                                <div className='boxpost'>
                                    <img src={post.photopost} alt={post.name} />
                                </div>

                                <div className='buttonpost'>
                                    <p>like</p>
                                    <p>comment</p>
                                    <p>share</p>
                                </div>
                                
                            </div>
                        ))}
                    
                </div>
            ))}

            
       
        </div>
    
  )
}

export default Post