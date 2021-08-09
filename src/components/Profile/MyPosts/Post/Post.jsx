import React from 'react';
import prof from './Post.module.css';

const Post = (props) => {
    return (
           <div className={prof.item}>
             <img src='https://e7.pngegg.com/pngimages/627/693/png-clipart-avatar-internet-meme-avatar-heroes-photography.png'/>
             {props.message}
             <div>
              <span>{props.likeCount} likes</span>
             </div>
           </div>
    )
}

export default Post;