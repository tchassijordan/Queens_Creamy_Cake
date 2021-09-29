import React, {useState, useEffect} from "react";
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group';
import styles from "./NavBar.module.css"
import fadeTransition from './fadeTransition.module.css'
import '../App.css'

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
                        <li><a className={styles.menu_ls_a} href="##">Cakes</a></li>
                        <li><a className={styles.menu_ls_a} href="##">Packs</a></li>
                        <li><a className={styles.menu_ls_a} href="##">Others</a></li>
                    </ul>
                </CSSTransition>
            </li>
            <li><a className={styles.exp_list_a} href="##">ABOUT</a></li>
            <li><a className={styles.exp_list_a} href="##">CONTACT</a></li>
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
    
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.logo}>
                    <a href="##">
                        <img className={styles.logoImg} src={'/images/QCC_logo.png'} alt="Logo" />
                    </a>
                </li>
                <li className={styles.slider}
                    onClick={() => setExplore(!isOpen)}
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