import styles from "./FormInput.module.css"
import { FaLock } from "react-icons/fa";

export default function FormInput(props) {
    return (

        <>
            <form className={styles.FormImput} action="">
                <div className={styles.BarInput}>
                    <input className={styles.Form} placeholder={props.placeholder} type={props.type} />
                    {props.icon ? (
                        <div className={styles.icon}>
                            {props.icon}
                        </div>
                    ) : null}
                </div>

                {props.children}
            </form>
        </>
    )
}