import styles from "./ViewList.module.css"
import Button from "../buttons/Button";
import { FaChevronRight } from "react-icons/fa";


export default function View(){
    return(
        <>
        <div className={styles.layoutMain}>
            <div className={styles.button}>
                <Button icon={<FaChevronRight />}/>
                <Button icon={<FaChevronRight />}/>
                <Button icon={<FaChevronRight />}/>
            </div>
        </div>



        </>
    )
}