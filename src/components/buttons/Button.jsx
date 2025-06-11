import styles from "./Button.module.css"

export default function Button(props){
    return(
        <>
        <div className={styles.ButtonPage}>
        <button type="submit">Operação de Vendas </button>
        {props.icon ? (
                        <div className={styles.icon}>
                            {props.icon}
                        </div>
                    ) : null}
        </div>
        </>
    )
}