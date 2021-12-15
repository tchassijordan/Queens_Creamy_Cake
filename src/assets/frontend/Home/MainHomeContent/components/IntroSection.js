import React from "react"
import styles from "../MainHomeContent.module.css"
import ImageRedirector from "../../../GeneralComponents/ImageRedirector"; 

//create reference to my objects
const images = ImageRedirector();

export default function Intro(props) {
    const bg_img = {
        ...props.style,
        backgroundImage: `url("${images["pink-bg4.jpg"].default}")`,
        filter: 'blur(5px)'
    }

    return (
        <div className={styles.Container}>
            <div style={bg_img} />
            <div className={styles.introContainer}>
                <div className={styles.introItem}>
                    <img className={styles.introItemImg} src={images["chocolate.jpg"].default} alt="packs" />
                    <div className={styles.introItemText}>
                        <h3 className={styles.introItemTextTitle}>Explore Our Packs</h3>
                        <p className={styles.introItemTextDes}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className={styles.introItem}>
                    <img className={styles.introItemImg} src={images["cupcake3.jpg"].default} alt="cupcakes" />
                    <div className={styles.introItemText}>
                        <h3 className={styles.introItemTextTitle}>Cupcakes</h3>
                        <p className={styles.introItemTextDes}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}