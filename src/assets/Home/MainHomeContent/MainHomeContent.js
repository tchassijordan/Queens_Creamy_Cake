import React from "react";
import '../../../App.css'
import styles from "./MainHomeContent.module.css"
import Intro from "./components/IntroSection";
import About from "./components/About";
import Explore from "./components/ExploreSection";

const bg_img = {
    backgroundImage: 'url("/images/white-cake-bg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(243, 239, 239, 0.952)',
    height: '100%',
    filter: 'blur(5px)',
    gridColumn: '1 / -1',
    gridRow: '1 / -1'
}

export default function MainHomeContent() {
    return (
        <>
            <div>
                <About style={bg_img} />
                <Intro style={bg_img} />
                <img className={styles.afImg} src="/images/chocolate.jpg" alt="Donuts" />
                <Explore />
                <div className={styles.logoImgContainer}>
                    <img className={styles.logoImg} src="/images/logo_big.jpeg" alt="Logo" /> 
                </div>
            </div>
        </>
    )
}