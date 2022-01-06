import React from "react";
import './styles.css'
export default function Background(props){
    return(
        <div className="background" style={{background:props.color}}>
            {props.children}
        </div>
    )
}