import style from './Main.module.css';
import { MainTitle } from '../mainTitle/MainTitle';
import { Description } from '../description/Description';
import { BtnList } from '../btn/BtnList';
import mainImg from '../../assets/img/astronautas.png';


function Main(){
    return (
        <main className="container">
        <div className="column-left">
            <MainTitle />
                <Description />
                <BtnList />
            </div>
            <div className="column-right">
                <img className={style.mainImg} src={mainImg} alt="Astronautas raso zinute namo, nes isskrydo i kosmosa" />
            </div>
    </main>
    );
}


export { Main };