import { Btn } from './Btn';
import style from './Btn.module.css';

function BtnList(){
    return (
        <div className={style.btnList}>
            <Btn title="Go home" color="violet" />
            <Btn title="Back" color="purple" />
        </div>
    );
}


export { BtnList };