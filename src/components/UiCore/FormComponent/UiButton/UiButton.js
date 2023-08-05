import { CircularProgress, Tooltip } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";
import styles from "./UiButton.module.css";
const UiButton= (props) => {
  return (
    <Button type={props.type}  variant="contained" {...props} className={props.className} style={{
      backgroundColor:'#6EFA6B',
      color: "#FF0606",
    }}  >
     {props.text}
    </Button>
  );
};
export default UiButton
