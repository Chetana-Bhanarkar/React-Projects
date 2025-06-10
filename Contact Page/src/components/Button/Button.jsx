import { MdOutlineMessage } from "react-icons/md";

import styles from './Button.module.css'

function Button(props) {
    const alertMessage = (msg) => {
       if(msg){
         alert(msg)
       }
    }
    
    return (
        <>
            <button className={props.isOutline ? styles.outline_btn : styles.btn} onClick={() => alertMessage(props.message)}>
                {props.icon}
                {props.text}
            </button>
        </>
    )
}


export default Button;