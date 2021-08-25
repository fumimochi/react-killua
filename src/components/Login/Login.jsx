import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'} component={Input}
                    validate={ [required] }/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}
                    validate={ [required] }/>
                </div>
                <div className={s.checkRemember}>
                    <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
                    <span>remember me</span>
                </div>
                { error && <div className={s.formSummaryError}>{error}</div> }
                <div>   
                    <button className={s.button}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm( { form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <div className={s.login}>
            <h1>Login</h1>
        </div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ( {
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);