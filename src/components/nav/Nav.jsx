import { Btn } from '../btn/Btn';
import { Link } from './Link';
import style from './Nav.module.css';

function Nav(){
    return (
            <nav className={style.mainNav}>
                <Link title="About" isActive={true} />
                <Link title="Jobs" />
                <Link title="Portfolio" isActive="false" />
                <Link title="Contact" />
                <Btn title="Register" color="violet" size="small" />
            </nav>
    );
}


export { Nav }; 

// perduoti teksta "true", bet ir rasyti kabutese reiskes params.isActive === 'true' ? style.active : '';
// komponente yra atributai, is kuriu sukonstruoja objekta ->
// title yra object key, o "About" yra value. Jeigu stringas tai kabutėse. 
// perduoti kitas reiksmes i komponentu vidu rasome riestiniuose {true}, {2}, {[1, 2, 3, 4]} ....


// red globalus kur ateitu is index.css, o style.navLink ir active kai yra dvi klases, 
// arba su tarpeliu rasyti, arba su backtickais ir dolerio zenklu ir tarpu.


// 1 ex. <a className={style.navLink + ' ' + style.active} href="/">About</a>
// 2 ex. <a className={`red ${style.navLink} ${style.active}`} href="/">Portfolio</a>
// <a className={`${style.navLink} ${style.active}`} href="/">About</a>


// Destructing:

// const person = {
//     name: 'John',
//     age: 99,
//     isMarried: true,
// };


// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;


// const { name, age, isMarried } = person;
// trys kintamieji ir istraukiami is objekto person atitinkami raktazodziu pavadinimai.


    
//     const activeClass = params.isActive === true ? style.active : '';
//     return <a className={`${style.navLink} ${activeClass}`} href="/">{params.title}</a>


