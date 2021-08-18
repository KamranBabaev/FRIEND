import React from 'react';
import {useFormik} from 'formik';
import {loginTC} from "../../redux/reducers/auth-reducers";
import {useDispatch, useSelector} from "react-redux";
import {RootReduxStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from "./LoginFormik.module.css";

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const Login = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector<RootReduxStateType, boolean>(state => state.auth.isAuth)

  const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          rememberMe: false,
        },

        validate: (values) => {
          const errors: FormikErrorType = {};
          if (!formik.values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        },

        onSubmit: values => {
          dispatch(loginTC(values.email, values.password, false, false))
          formik.resetForm()
        },
      }
  );

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
      <form onSubmit={formik.handleSubmit} className={styles.formBlock}>

        <div className={styles.itemForm}>
          <label className={styles.title} htmlFor="email">
            Email: </label>
          <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
          />
        </div>

        <div className={styles.itemForm}>
          <label className={styles.title} htmlFor="password">
            Password: </label>
          <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
          />
        </div>

        <div className={styles.checkbox}>
          <input
              type="checkbox"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
          />
          <label className={styles.title} htmlFor="checkbox">
            запомнить меня</label>
        </div>

        <button type="submit">войти</button>
      </form>
  );
};
