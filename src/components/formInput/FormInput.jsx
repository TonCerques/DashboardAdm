import styles from "./FormInput.module.css"
import { FaLock } from "react-icons/fa";

export default function FormInput(props) {
    return (

        <form className={styles.FormImput} action="">
            <div className={styles.BarInput}>
            <input className={styles.Form} placeholder={props.placeholder}  type={props.type}/>
            <FaLock className={styles.lock}/>
            </div>
            {props.children}
        </form>

    )
}