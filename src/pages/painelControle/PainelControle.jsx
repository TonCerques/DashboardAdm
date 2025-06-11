import styles from "./PainelControle.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import SideBar from "../../components/SideBar/SideBar";
import logo from "../../assets/images/senac_logo.png";
import Table from "../../components/Table/Table";
import FormInput from "../../components/formInput/FormInput"
import View from "../../components/ViewList/ViewList";

export default function PainelControle() {
    return (
        <>
            <div className={styles.layout}>
            <div className={styles.SideIcons}>
                <SideBar className={styles.Icons}/>
            </div>
            <div className={styles.SideTables}>
                <img className={styles.LogoSenac} src={logo} alt="" />
                <Table className={styles.TableList} />
            </div>
            <div className={styles.ViewList}>
                <View/>
            </div>
            </div>
        </>
    )
}