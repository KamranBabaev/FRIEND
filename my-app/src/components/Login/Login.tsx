import {InjectedFormProps, reduxForm, Field} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validator";

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
          <Field placeholder={'логин...'}
                 name={'login'}
                 component={Input}
                 validate={[required]}
          />
        </div>
        <div>
          <Field type={'password'} name={'password'}
                 placeholder={'пароль...'}
                 component={Input}
                 validate={[required]}
          />
        </div>
        <div>
          <Field type={'checkbox'}
                 name={'rememberMe'}
                 component={Input}
          />
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
