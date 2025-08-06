import styles from "./Login.module.css"
import logo from "../../assets/images/senac_logo.png"
import FormInput from "../../components/formInput/FormInput"
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Login() {
    return (
        <>
            <div className={styles.loginContainer}>
                <img className={styles.LogoSenac} src={logo} alt="" />
                <p>Bem vindo ao nosso ponto de Controle, por favor, <br />insira seus dados abaixo para acessar o Eduque Controle</p>
                <div className={styles.layoutLogin}>
                    <FormInput placeholder="Digite seu usuário" icon={<FaUser />}>
                    </FormInput>
                    <FormInput className={styles.password} placeholder="Digite sua senha" type="password" icon={<FaLock />}>                    </FormInput>
                    <button type="submite">Confirmar</button>
                </div>
            </div>
        </>
    )
}