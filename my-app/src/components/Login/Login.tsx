import {InjectedFormProps, reduxForm, Field} from "redux-form";
import React from "react";

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }

  return (
      <div>
        <h1>Вход:</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  )
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'логин...'} name={'login'}
                 component={'input'}/>
        </div>
        <div>
          <Field type={'password'} name={'password'}
                 placeholder={'пароль...'}
                 component={'input'}/>
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
          <span>запомнить меня</span>
        </div>
        <div>
          <button>войти</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>(
    {form: 'login'}
)(LoginForm)
