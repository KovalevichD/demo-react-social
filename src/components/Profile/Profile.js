import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <main className={s.mainContent}>
            <ProfileInfo 
            isOwner={props.isOwner} 
            profile={props.profile} 
            status={props.status} 
            updateStatus={props.updateStatus}
            setUserImage={props.setUserImage}
            saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </main>
    )
}

export default Profile;