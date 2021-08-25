import React from 'react';
import prof from './Post.module.css';

const Post = (props) => {
    return (
           <div className={prof.item}>
             <img src='https://www.pinpng.com/pngs/m/5-52287_cool-avatar-png-picture-illustration-transparent-png.png'/>
             <div>
               <div className={prof.message}>
                {props.message}
              </div>
              <span className={prof.likes}>{props.likeCount} likes</span>
             </div>
           </div>
    )
}

export default Post;