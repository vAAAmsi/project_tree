import React from 'react'
import styles from '../Global.module.css'
import AOLlogo from "../../../../assets/images/treeLogo.png";

import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Form from '../../../UiCore/FormComponent/FormFeild/FormFeild';
import InputFormFeild from '../../../UiCore/FormComponent/InputFormFeild/InputFormFeild';
import UiButton from '../../../UiCore/FormComponent/UiButton/UiButton';
const forgotpasswordSchema=yup.object().shape({
  "username":yup.string().required(),
})
export default function ForgotPassword() {
  const navigate=useNavigate();
  const onSubmit=(data)=>{
    console.log("data is",data)
    navigate('/login')
  }
  return (
    <div className={styles.outerContainer}>
    <div className={styles.container}>
    <img src={AOLlogo}  className={styles.img}  />
        <div className={styles.heading}>Forgot Password</div>
        <Form  onSubmit={onSubmit}  schema={forgotpasswordSchema} >
            <label className={styles.label}>Username</label>
            <InputFormFeild label="username"  type="email" name="username" className={styles.input} placeholder="Enter email address" ></InputFormFeild>
            <br/>
            <div  className={styles.btnContainer} >
            <UiButton text="Send" type="submit" className={styles.button}></UiButton>
            </div>
            <Link to="/login" ><div className={styles.link}>Back to log in</div></Link>
        </Form>
    </div>
    </div>
  )
}
