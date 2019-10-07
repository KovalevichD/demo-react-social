import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import style from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {props.error 
            ? <div className={style.commonError}>
                {props.error}
            </div>
            : null}
        <div><button>Save</button></div>
        <div>
            <b>Name: </b> <Field placeholder={'Enter your name'} name={'fullName'} component={Input} type={'text'} />
        </div>

        <div>
            <b>Looking for a job: </b> <Field name={'lookingForAJob'} component={Input} type={'checkbox'} />
        </div>
        <div>
            <b>My Professional skills: </b> <Field placeholder={'My Professional skills'} name={'lookingForAJobDescription'} component={Textarea} />
        </div>
        <div>
            <b>About me: </b> <Field placeholder={'About me'} name={'aboutMe'} component={Textarea} />
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <div >
                    <b>{key}:</b> <Field key={key} placeholder={key} name={'contacts.' + key} component={Input} type={'text'} />
                </div>
            })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({ form: 'profile' })(ProfileDataForm)

export default ProfileDataReduxForm;