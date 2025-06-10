import styles from "./Login.module.css"
import logo from "../../assets/images/senac_logo.png"
import FormInput from "../../components/formInput/FormInput"



export default function Login() {
    return (
        <>
            <div className={styles.loginContainer}>
                <img className={styles.LogoSenac} src={logo} alt="" />
                <p>Bem vindo ao nosso ponto de Controle, por favor, <br />insira seus dados abaixo para acessar o Eduque Controle</p>
                <div className={styles.layoutLogin}>
                    <FormInput placeholder="Digite seu usuário" >

                    </FormInput>
                    <FormInput placeholder="Digite sua senha" type="password">
                    </FormInput>
                    <button type="submite">Confirmar</button>
                </div>
            </div>
        </>
    )
}