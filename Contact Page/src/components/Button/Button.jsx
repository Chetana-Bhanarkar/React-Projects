import { MdOutlineMessage } from "react-icons/md";

import styles from './Button.module.css'

function Button(props) {
    console.log(props);
    
    return (
        <>
            <button className={styles.btn}>
                {props.icon}
                {props.text}
            </button>
        </>
    )
}


export default Button;