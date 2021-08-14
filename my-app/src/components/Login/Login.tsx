import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {loginTC} from "../../redux/reducers/auth-reducers";
import {Redirect} from "react-router-dom";
import {RootReduxStateType} from "../../redux/redux-store";
import styles from '../common/FormsControl/FormsControl.module.css'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}
type mapStateToPropsType = {
  isAuth: boolean
}
type mapDispatchToPropsType = {
  loginTC: (email: string, password: string, rememberMe: boolean) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType


const Login = ({loginTC, isAuth}: LoginPropsType) => {

  const onSubmit = (formData: FormDataType) => {
    loginTC(formData.login, formData.password, formData.rememberMe)
  }

  if (isAuth) {
    return <Redirect to='/profile'/>
  } else {
    return <div>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  }
}

const LoginForm = ({handleSubmit, error}: any) => {
  return (
      <form className={styles.formBlock} onSubmit={handleSubmit}>
        <h1>Вход:</h1>
        <div className={styles.inputs}>
          <Field placeholder={'логин...'}
                 name={'login'}
                 component={Input}
                 validate={[required]}
          />
        </div>
        <div className={styles.inputs}>
          <Field type={'password'} name={'password'}
                 placeholder={'пароль...'}
                 component={Input}
                 validate={[required]}
          />
        </div>
        <div className={styles.checkBox}>
          <Field type={'checkbox'}
                 name={'rememberMe'}
                 component={Input}
          />
          <span>запомнить меня</span>
        </div>
        {
          error && <div className={styles.formSummaryError}>
            {error}
          </div>
        }
        <div>
          <button>войти</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>(
    {form: 'login'}
)(LoginForm)

const mapStateToProps = (state: RootReduxStateType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,
    {loginTC})(Login)
