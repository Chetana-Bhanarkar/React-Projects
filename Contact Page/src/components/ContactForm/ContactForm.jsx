import Button from '../Button/Button';
import styles from './ContactForm.module.css'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

function ContactForm() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.contact_form}>
                    <div className={styles.form_btns}>
                        <Button text="Via Support Chat" icon={<MdOutlineMessage fontSize="24px" />} />
                        <Button text="Via Call" icon={<IoMdCall fontSize="24px" />} />
                    </div>

                </div>
                <div className={styles.contact_image}>

                </div>
            </div>
        </>
    )
}

export default ContactForm;