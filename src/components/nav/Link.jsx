import style from './Nav.module.css';


export function Link(params){

    const {title, isActive} = params;  //destructizavimas?

    const activeClass = isActive === true ? style.active : '';
    return ( 
        <a className={`${style.navLink} ${activeClass}`} 
        href="/">{title}</a>
    );
}

// params yra objektas   // console.log(params);
// props = params???
// props - properties dokumentacija pasiskaityti!