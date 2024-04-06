import logoImg from '../../assets/img/logo.webp';
import style from '../../components/logo/Logo.module.css'

function Logo(){
    return (
        <img className={style.logo} src={logoImg} alt="Logo" />
    );
}


export { Logo };