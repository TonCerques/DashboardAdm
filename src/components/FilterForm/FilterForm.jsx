//import do css

import styles from './FilterForm.module.css';

// estrtutura do componente 

function FilterForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="idEstoque">ID Estoque</label>
        <input type="text" id="idEstoque" className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="quantLote">Quant. Lote</label>
        <input type="text" id="quantLote" className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="horaInicio">Hora Início</label>
        <input type="time" id="horaInicio" className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="horaFinal">Hora Final</label>
        <input type="time" id="horaFinal" className={styles.input} />
      </div>
    </form>
  );
}

export default FilterForm;

