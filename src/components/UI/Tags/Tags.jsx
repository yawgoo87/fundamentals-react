import React from "react";
import classes from './Tags.module.css'

const Tags = (props) => {
    return(
        <div className={classes.tags}>
            {
                props.tags.map(item => 
                    <span>{item}</span>
                )
            }
        </div>
    )
}

export default Tags