import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatusWithRouter';
import UserPhoto from '../../../assets/images/users.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.setUserImage(e.target.files[0])
        }

    }

    const onSubmit = (formData) => {
         props.saveProfile(formData).then(() => {
            setEditMode(false); 
         })
        
    }

    return (
        <div>
            <div className={s.user}>
                <img src={props.profile.photos.large || UserPhoto} alt='User' />
                {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
            </div>

            {editMode
                ? <ProfileDataForm
                    onSubmit={onSubmit}
                    profile={props.profile}
                    initialValues={props.profile} /> // initialValues - from 'redux-form'
                : <ProfileData
                    profile={props.profile}
                    isOwner={props.isOwner}
                    goToEditMode={() => { setEditMode(true) }} />}

            <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus} />
        </div>
    );
}

const ProfileData = (props) => {
    return <div>
        <div>
            {props.isOwner && <button onClick={props.goToEditMode}>Edit profile</button>}
        </div>
        <div>
            <b>Name: </b> {props.profile.fullName}
        </div>
        <div>
            <b>About me: </b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job: </b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {props.profile.lookingForAJob && <div><i>{props.profile.lookingForAJobDescription}</i></div>}
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} name={key} value={props.profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ name, value }) => {
    return <div className={s.contact}><b>{name + ': '}</b> {<a href={`value`}>{value}</a> || 'no'}</div>
}

export default ProfileInfo;