import styles from "./PainelControle.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import SideBar from "../../components/SideBar/SideBar";
import logo from "../../assets/images/senac_logo.png";
import Table from "../../components/Table/Table";
// src/pages/painelControle/PainelControle.jsx
import FilterForm from '../../components/FilterForm/FilterForm';

function PainelControle() {
  return (
    <div>
      <h1>Painel de Controle</h1>
      <FilterForm />
      {/* reservado a outros elementos */}
    </div>
  );
}

export default PainelControle;

//teste aqui
//http://localhost:5173/painelControle



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