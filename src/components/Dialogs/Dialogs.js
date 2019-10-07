import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength300 = maxLengthCreator(300);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={'message'} component={Textarea} placeholder='Enter your message' validate={[required, maxLength300]}/>
        <button >Send</button>
    </form>
}

const SendMessageReduxForm = reduxForm({ form: 'message' })(AddMessageForm)

const Dialogs = (props) => {
    const dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    const messagesElement = props.messages.map(elem => <Message message={elem.message} />)

    const onSubmit = (formData) => {
        console.log(formData)
        props.addMessage(formData.message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <SendMessageReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}




export default Dialogs;