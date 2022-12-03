import React from 'react'
import users from '../api/api'
const Card = () => {
  return (
    <>
     <div className="home-card mb-4 border rounded d-flex justify-content-center">
        <div className="story-box m-3">
            <div className="story-img"><img src="./images/u1.jpg" alt="" /></div>
            <div className="story-text"><p className='text-center mt-2'>Ali</p></div>
        </div>
        <div className="story-box m-3">
            <div className="story-img"><img src="./images/u2.jpg" alt="" /></div>
            <div className="story-text"><p className='text-center mt-2'>Talha</p></div>
        </div>
        <div className="story-box m-3">
            <div className="story-img"><img src="./images/u6.jpg" alt="" /></div>
            <div className="story-text"><p className='text-center mt-2'>Abrar</p></div>
        </div>
        <div className="story-box m-3">
            <div className="story-img"><img src="./images/u4.jpg" alt="" /></div>
            <div className="story-text"><p className='text-center mt-2'>Numan</p></div>
        </div>
        <div className="story-box m-3">
            <div className="story-img"><img src="./images/u5.jpg" alt="" /></div>
            <div className="story-text"><p className='text-center mt-2'>Rehan</p></div>
        </div>
        <div className="story-box m-3">
            <div className="story-img"><img src="./images/u2.jpg" alt="" /></div>
            <div className="story-text"><p className='text-center mt-2'>Annie</p></div>
        </div>
     </div>
    
    {
        users.map((post)=>{
            return (
                <>
                  <div className="home-card mb-4 border rounded">
         <div className="username">
        <img src={post.user_img}></img>
        <p className='pt-2'>{post.name}</p>
      </div>
        <img className="postImage" src={post.post_img}></img>
        <div className="status">  
        <div className="like">
        <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Heart-128.png"></img>
        <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Chat_bubble-128.png"></img>
        </div>
        
        <div><b>sendifajri</b> The beach is definitely where I feel most at home. It's my oxygen. I forget how much I need it sometimes when I'm away working.</div>
        <div className="comment"><b>johndoe</b> So stunning</div>
      </div>
        <div className="commentInput">
        <textarea placeholder="Add a comment…"></textarea>
        <img src="https://i.stack.imgur.com/twIm6.png"></img>
      </div>
      </div>
                </>
            )
        })
    }

    </>
  )
}

export default Card