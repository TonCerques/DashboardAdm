import styles from './Register.module.css';

const Register = () => {
    return (
        <div ClassName={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>Cadastro de novo Produto</h2>


         <div className={styles.formGrid}>
           {/* Esse formGrid é só para conseguir estruturar a tela da melhor maneira, colocar as janelas lado a lado Lembrando que esse é o campo nome do produto*/}
         <div className={styles.formGroup}>
            <label htmlFor="NomeProduto" classNome={styles.label}>Nome do produto</label>
            <input type="text" id="nomeProduto" className={styles.input} />
            </div>
        
        {/* Essa parte é onde fica o campo Categoria*/}
        <div className={styles.formGroup}>
            <label htmlFor="categoria" className={styles.label}>Categoria</label>
            <select id="categoria" className={styles.input}>
                <opinion value="">Selecione...</opinion>
            </select>
          </div>

        {/* Essa parte é o campo Peso*/} 
        <div className={styles.formGroup}>
            <label htmlFor="peso" className={styles.label}>Peso</label> 
            <input type="text" id="peso" className={styles.label} />
        </div>
        </div> 

        {/* Essa é a np*/}
         <div className={styles.formGroup}>
          <label htmlFor="descricao" className={styles.label}>Descrição do Produto...</label>
          <textarea id="descricao" className={`${styles.input} ${styles.textArea}`}></textarea>
        </div>

        <div className={styles.formActions}>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.registerButton}`}>Registrar</button>
            <button className={`${styles.button} ${styles.cancelButton}`}>Cancelar</button>
          </div>
          <div className={styles.productCode}>
            <span className={styles.productCodeLabel}>Código do Produto:</span>
            <span className={styles.productCodeValue}>Null</span>
          </div>
        </div>
      </div>
    </div>
  );
};   
       


export default Register; 