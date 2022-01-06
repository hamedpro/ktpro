import { useState } from "react"
import "./styles.css"
export default function CheckBox(props){
    //nessesary props => is_checked_by_default 
    //unnessesary props => style , on_activate_onclick , on_deactivate_onclick , onchange
    const [checked_state,trigger_checked_state] = useState(props.is_checked_by_default)
    //add default value support with optional props
    const onclick_handler = ()=>{
        //check for problem like problem for bind func which we have in class components 
        trigger_checked_state(!checked_state)
        if(!checked_state == true){
            if(typeof props.on_activate_onclick == "function"){
                props.on_activate_onclick()
            }
            
        }else{
            if(typeof props.on_deactivate_onclick == "function"){
                props.on_deactivate_onclick()
            }
        }
        if(typeof props.onChange == "function"){
            props.onChange()
        }
    }
    return(
        <div 
        style={typeof props.style == "undefined" ? {}:props.style} 
        className={"CheckBox " + (checked_state ? "checked_checkbox":"")}
        onClick={onclick_handler}>
        </div>
    )
}