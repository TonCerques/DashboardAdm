import styles from "./PainelControle.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import SideBar from "../../components/SideBar/SideBar";
import logo from "../../assets/images/senac_logo.png";
import Table from "../../components/Table/Table";

import Register from '../../components/Register/Register'; 

export default function PainelControle() {
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.SideIcons}>
                    <SideBar className={styles.Icons} />
                </div>
                <div className={styles.SideTables}>
                    <img className={styles.LogoSenac} src={logo} alt="" />
                    {/* Aqui está a mudança: o componente Table foi substituído por Register */}
                    {/* A linha original era: <Table className={styles.TableList} /> */}
                    <Register />
                </div>
            </div>
        </>
    );
}



/*export default function PainelControle() {
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
            </div>
        </>
    )
}*/