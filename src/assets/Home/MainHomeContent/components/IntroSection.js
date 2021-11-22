import React from "react"
import styles from "../MainHomeContent.module.css"

export default function Intro(props) {
    const bg_img = {
        ...props.style,
        backgroundImage: 'url("/images/pink-bg4.png")',
        filter: 'blur(5px)'
    }

    return (
        <div className={styles.Container}>
            <div style={bg_img} />
            <div className={styles.introContainer}>
                <div className={styles.introItem}>
                    <img className={styles.introItemImg} src="/images/chocolate.jpg" alt="packs" />
                    <div className={styles.introItemText}>
                        <h3 className={styles.introItemTextTitle}>Explore Our Packs</h3>
                        <p className={styles.introItemTextDes}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className={styles.introItem}>
                    <img className={styles.introItemImg} src="/images/cupcake3.jpg" alt="cupcakes" />
                    <div className={styles.introItemText}>
                        <h3 className={styles.introItemTextTitle}>Cupcakes</h3>
                        <p className={styles.introItemTextDes}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}