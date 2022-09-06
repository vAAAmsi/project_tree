import { TextField,Input,InputBase,FormHelperText } from "@mui/material";
import  { OutlinedTextFieldProps } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';
import { useController } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import styles from './InputFormFeild.module.css'
 const InputFormFeild=(props)=>{
    const {
        field,
        fieldState: { error },
      } = useController({ name: props.name, defaultValue: "" });
    return(
        <div>
      <FormControl  error={!!error?.message} >
      <InputBase
      // autoFocus
    {...props}
      {...field}
      style={{borderColor:error?.message?'#d32f2f':'black'}}
    />
      <FormHelperText id="my-helper-text">{error?.message}</FormHelperText>

      </FormControl>
    </div>
    )
}

export default InputFormFeild;
InputFormFeild.propTypes =
 {
    name: PropTypes.string,
    label:PropTypes.string,
  };