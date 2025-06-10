import styles from "./SideBar.module.css"
import { GiBoxUnpacking } from "react-icons/gi";
import { IoPersonAdd } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";



export default function SideBar(){
    return(
        <>
        <div className={styles.SideBarContainer}>
            <div className={styles.Icons}>
            <FaRegUserCircle className={styles.User}/>
            <GiBoxUnpacking className={styles.Box} />
            <IoPersonAdd className={styles.AddUser}/>
            </div>
            <div className={styles.Linha}></div>
        </div>
        </>
    )
}