import React, {useState, useEffect} from "react";
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group';
import styles from "./NavBar.module.css"
import fadeTransition from '../transitions/expand.module.css'
import '../../../../App.css'
import { Link } from "react-router-dom";
import ImageRedirector from "../../GeneralComponents/ImageRedirector"; 

//create reference to my images objects
const images = ImageRedirector();

const Explore = () => {
    const [isOpen, setOffer] = useState(false)
    
    return ( 
        <ul className={styles.exp_list}>
            <li 
                className={styles.menu}
                onClick={() => setOffer(!isOpen)}
            >
                MENU & OFFERS 
                { isOpen ? <span className={styles.menu_i}><FaChevronUp /></span>
                : <span className={styles.menu_i}><FaChevronDown /></span> }
                <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames={fadeTransition}
                    unmountOnExit
                >
                    <ul className={styles.menu_ls}>
                        <li><Link className={styles.menu_ls_a} to="/store/">Store</Link></li>
                        <li><Link className={styles.menu_ls_a} to="/store/cakes">Cakes</Link></li>
                        <li><Link className={styles.menu_ls_a} to="/store/packs">Packs</Link></li>
                        <li><Link className={styles.menu_ls_a} to="##">Others</Link></li>
                    </ul>
                </CSSTransition>
            </li>
            <li><Link className={styles.exp_list_a} to="/about">ABOUT</Link></li>
            <li><Link className={styles.exp_list_a} to="/contact">CONTACT</Link></li>
        </ul>
    )
}

export default function NavBar() {
    const [isOpen, setExplore] = useState(false)
    const checkwidth = () => {
        if (window.innerWidth >= 490) {
            setExplore(true)
        } 
    }
    useEffect(() => {
        checkwidth()
    })
    const activeExplore = {
        borderColor: 'rgb(255, 105, 180)',
        opacity: '0.85'
    }
    
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.logo}>
                    <Link to="/">
                        <img className={styles.logoImg} src={images['QCC_logo.jpg'].default} alt="Logo" />
                    </Link>
                </li>
                <li className={styles.slider}
                    onClick={() => setExplore(!isOpen)}
                    style={isOpen ? activeExplore : null}
                >Explore</li>
            </ul> 
           
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames={fadeTransition}
                unmountOnExit
            >
                <Explore /> 
            </CSSTransition>
            
        </nav>
    )
}