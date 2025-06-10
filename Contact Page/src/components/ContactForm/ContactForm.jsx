import Button from '../Button/Button';
import styles from './ContactForm.module.css'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';


function ContactForm() {
    const [name, setName] = useState("Chetana")
    const [email, setEmail] = useState("cb@gmail.com")
    const [text, setText] = useState("I am a Developer")

    const submitForm = (event) => {
        event.preventDefault();
        console.log(name, email, text); 
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.contact_form}>
                    <div className={styles.form_btns}>
                        <Button text="Via Support Chat" icon={<MdOutlineMessage fontSize="24px" />} message={"Via Support Chat"} />
                        <Button text="Via Call" icon={<IoMdCall fontSize="24px" />} message={"Via Call"} />
                    </div>
                    <div className={styles.form_btns}>
                        <Button text="Via Email" icon={<MdEmail fontSize="24px" />} isOutline={true} message={"Via Email"} />
                    </div>

                    <form onSubmit={submitForm}>
                        <div className={styles.form_controls}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' onChange={($event)=>setName(event.target.value)} />
                        </div>
                        <div className={styles.form_controls}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name='email' onChange={($event)=>setEmail(event.target.value)} />
                        </div>
                        <div className={styles.form_controls}>
                            <label htmlFor="text" >Text</label>
                            <textarea name="text" cols="30" rows="10" style={{ resize: "none" }} onChange={($event)=>setText(event.target.value)} />
                        </div>
                        <div style={{
                            display : "flex",
                            justifyContent : "end"
                        }}>
                            <Button text="SUBMIT"></Button>
                        </div>
                    </form>

                </div>
                <div className={styles.contact_image}>
                    <img src="./availability.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default ContactForm;