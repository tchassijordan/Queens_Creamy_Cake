import React from "react"
import styles from "../MainHomeContent.module.css"
import Gelato from "../../svg/Gelato"

export default function Explore() {
    return (
        <div className={styles.exploreContainer}>
            <div className={styles.exploreItem}>
                <div className={styles.exploreItemDes}
                    style={{ backgroundColor: 'rgba(128, 0, 128, 1)' }}
                >
                    {/* <h3 className={styles.exploreItemDesTitle}>Menu</h3> */}
                    <p className={styles.exploreItemDesText}>Visit our <strong>Menu</strong> and enjoy our goodies</p>
                    <a className={styles.viewMenuBtn} href="##" >View Menu</a>
                </div>
                <div className={styles.styledExploreImg}>
                    <Gelato style={styles.gelato} fill='rgba(128, 0, 128, 1)' />
                    <img className={styles.exploreItemImg} src="/images/triangle_slice.jpg" alt="Explore Menu" />
                </div>
            </div>
            <div className={styles.exploreItem}>
                <div className={styles.exploreItemDes}>
                    {/* <h3 className={styles.exploreItemDesTitle}>Customize your cakes</h3> */}
                    <p className={styles.exploreItemDesText}>
                        Choose the <strong>flavour, aroma, shape </strong> of your cakes, and we'll make is come to life.
                    </p>
                    <a className={styles.customizeBtn} href="##">Customize</a>
                </div>
                <div className={styles.styledExploreImg}>
                    <Gelato style={styles.gelato} fill='white' />
                    <img className={styles.exploreItemImg} src="/images/yellow_cake.jpg" alt="Best Cakes" />
                </div>
            </div>
        </div>
    )
}