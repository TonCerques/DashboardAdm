import styles from "./Table.module.css"
import { FaChevronRight } from "react-icons/fa";
export default function Table() {
    return (
        <>  <div className={styles.TableElements}>
            <div className={styles.TableContainer}>
                <div className={styles.header}>
                    <p>Últimos lotes lançados</p>
                    <FaChevronRight />
                </div>
                <div className={styles.List}>
                <ul className={styles.Operator}>
                    <p>Operador: Null</p>
                    <p>Operador: Null</p>
                    <p>Operador: Null</p>
                    <p>Operador: Null</p>
                </ul>
                <ul className={styles.Lote}>
                    <p>Lote: Null</p>
                    <p>Lote: Null</p>
                    <p>Lote: Null</p>
                    <p>Lote: Null</p>
                </ul>
                <ul className={styles.Qtd}>
                    <p>Qtd: Null</p>
                    <p>Qtd: Null</p>
                    <p>Qtd: Null</p>
                    <p>Qtd: Null</p>
                </ul>
                <ul className={styles.Date}>
                    <p>--/--/--</p>
                    <p>--/--/--</p>
                    <p>--/--/--</p>
                    <p>--/--/--</p>
                </ul>
                <ul className={styles.Hour}>
                    <p>00h00</p>
                    <p>00h00</p>
                    <p>00h00</p>
                    <p>00h00</p>
                </ul>
                </div> 
            </div>
            <div className={styles.TableContainer}>
                <div className={styles.header}>
                    <p>Últimos lotes lançados</p>
                    <FaChevronRight />
                </div>
                <div className={styles.List}>
                <ul className={styles.Operator}>
                    <p>Operador: Null</p>
                    <p>Operador: Null</p>
                    <p>Operador: Null</p>
                    <p>Operador: Null</p>
                </ul>
                <ul className={styles.Lote}>
                    <p>Lote: Null</p>
                    <p>Lote: Null</p>
                    <p>Lote: Null</p>
                    <p>Lote: Null</p>
                </ul>
                <ul className={styles.Qtd}>
                    <p>Qtd: Null</p>
                    <p>Qtd: Null</p>
                    <p>Qtd: Null</p>
                    <p>Qtd: Null</p>
                </ul>
                <ul className={styles.Date}>
                    <p>--/--/--</p>
                    <p>--/--/--</p>
                    <p>--/--/--</p>
                    <p>--/--/--</p>
                </ul>
                <ul className={styles.Hour}>
                    <p>00h00</p>
                    <p>00h00</p>
                    <p>00h00</p>
                    <p>00h00</p>
                </ul>
                </div> 
            </div>
            </div>
        </>
    )

}