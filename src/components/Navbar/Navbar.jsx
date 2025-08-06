// src/components/Navbar/Navbar.jsx
import React from 'react';
import { FaRegUserCircle, FaChevronRight } from 'react-icons/fa';
import styles from './Navbar.module.css';
import logo from '../../assets/images/senac_logo.png'; // ajustar a imagem do senac logo

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Logo Senac Eduque Controle" className={styles.logo} />
        <h2 className={styles.title}>Painel de Controle</h2>
      </div>

      <div className={styles.navLinks}>
        {/* Botão de Operação de Vendas (Ativo) */}
        <div className={`${styles.navButton} ${styles.active}`}>
          <span>Operação de Vendas</span>
          <FaChevronRight className={styles.arrowIcon} />
        </div>

        {/* Botão de Estoque de Produtos */}
        <div className={styles.navButton}>
          <span>Estoque de Produtos</span>
          <FaChevronRight className={styles.arrowIcon} />
        </div>

        {/* botão removido */}

      </div>

      <div className={styles.userIcon}>
        <FaRegUserCircle />
      </div>
    </nav>
  );
}

export default Navbar;

/* Botão de Agendamento de Estoque */

        /*{}
        <div className={styles.navButton}>
          <span>Agendamento de Estoque</span>
          <FaChevronRight className={styles.arrowIcon} />
        </div>*/