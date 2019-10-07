import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} type={'text'} validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'Password'} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={'rememberME'} type={'checkbox'} /> remember me
            </div>
            {props.error 
            ? <div className={style.commonError}>
                {props.error}
            </div>
            : null}
            
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberME)
        console.log(formData)
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapDispatchToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapDispatchToProps, { login})(Login);