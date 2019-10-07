import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';


const maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='addPostBody' validate={[required, maxLength10]} placeholder='Add post' />
        </div>
        <div>
            <button className={s.sendButton}>Отправить</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({ form: 'addPostForm' })(AddPostForm)

const MyPosts = (props) => {
   
        console.log('RENDER YOOO')
        const postElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

        const onSubmit = (formData) => {
            props.addPost(formData.addPostBody);
        }

        return (
            <div className={s.myPosts}>
                <h3>My posts</h3>
                <AddPostReduxForm onSubmit={onSubmit} />
                {postElements}
            </div>
        )
    

}



export default MyPosts;