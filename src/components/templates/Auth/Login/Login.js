
import styles from "../Global.module.css";
import AOLlogo from "../../../../assets/images/treeLogo.png";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from "@mui/material";
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import Form from "../../../UiCore/FormComponent/FormFeild/FormFeild";
import InputFormFeild from "../../../UiCore/FormComponent/InputFormFeild/InputFormFeild";
import CheckBoxFeild from "../../../UiCore/FormComponent/CheckBoxFeild/CheckBoxFeild";
import UiButton from "../../../UiCore/FormComponent/UiButton/UiButton";
const Login = (props) => {
  console.log("props is",props.data)
  const navigate=useNavigate();
  const onSubmit = (data) => {
    console.log("data is", data);
    navigate('/dashboard')
  };
  const loginSchema=yup.object().shape({
    "username":yup.string().required(),
    "password":yup.string().required()
  })
  const [show,setShow]=useState(false);
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img src={AOLlogo} className={styles.img} />
        <div className={styles.heading}>Login</div>
        <Form onSubmit={onSubmit} schema={loginSchema} >
          <label className={styles.label}>Username</label>
          <InputFormFeild
            label="username"
            name="username"
            className={styles.input} 
             variant={"outlined"}
            type="email"
            placeholder="enter email address"
          />
          <label className={styles.label}>Password</label>
          <InputFormFeild
            label="Password"
            name="password"
            type={show?"text":"password"}
            className={styles.input}
            placeholder="enter password"

             variant={"outlined"}
             endAdornment={(
              <InputAdornment position="end">
            <IconButton onClick={()=>setShow(!show)} >
              {show?<VisibilityOff/>:<Visibility/>}
            </IconButton>
            </InputAdornment>
            )}
           
             />
            <div  className={styles.checkbox} >
            <CheckBoxFeild label="Remember me?" name="remember" />
            </div>
          <div  className={styles.btnContainer} >
          <UiButton
            text="Login"
            type="submit"
            className={styles.button}
          ></UiButton>
          </div>
         <Link to="/forgotpassword" > <div className={styles.link}>Forgot password?</div></Link>
        </Form>
      </div>
    </div>
  );
};
export default Login;
