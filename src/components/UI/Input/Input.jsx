import React, { forwardRef } from "react";
import classes from './Input.module.css'

const Input = forwardRef((props, ref) => {
    return(
        <input ref={ref} className={classes.inp} {...props}/>
    )
});

export default Input;