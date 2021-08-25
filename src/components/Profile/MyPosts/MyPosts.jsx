import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field  component={Textarea} name={'newPostText'} placeholder={'Enter your text here...'}
          validate={ [required, maxLength10] } /> 
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const MyPosts = (props) => {

  let postsElements = 
  props.prop.map( post =>  <Post message={post.message} likeCount={post.likeCount} key={post.id}/>)

  let addPost = (values) => {
    props.addPost(values.newPostText);
  
  }

    return (
       <div className={s.postsBlock}>
         My posts
         <AddPostFormRedux onSubmit={addPost}/>
         <div className={s.posts}>
            { postsElements }
         </div>
       </div>
    )
}

const AddPostFormRedux = reduxForm( { form: 'textAddPostForm' } )(AddPostForm);

export default MyPosts;