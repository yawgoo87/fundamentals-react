import React from "react";
import classes from './Tags.module.css'

const Tags = (props) => {
    return(
        <div className={classes.tags}>
            {
                props.tags.map(item => 
                    <span key={props.tags.indexOf(item)}>{item}</span>
                )
            }
        </div>
    )
}

export default Tags