import style from './Footer.module.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';

function Footer(){
    return (
        <footer class="container">
            <div class={style.socials}>

                <a class={style.socialLink} href="/">
                    <FaFacebookSquare size="2rem"/>
                </a>

                <a class={style.socialLink} href="/">
                    <FaTwitterSquare size="2rem"/>
                </a>

                <a class={style.socialLink} href="/">
                    <FaInstagramSquare size="2rem"/>
                </a>

                <a class={style.socialLink} href="/">
                    <FaLinkedin size="2rem"/>
                </a>

            </div>
            <p class="copyright">&copy; 2024 - All rights reserved</p>
        </footer>
    );
}

export { Footer };

