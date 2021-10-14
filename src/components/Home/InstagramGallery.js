import React from "react";
import styles from "./InstagramGallery.module.css"

export default function InstagramGallery() {
    const gallery = ["/images/anniversary-cake.JPG","/images/twins-cake.JPG","/images/anniversary-promo-cake.JPG","/images/white-gold-cake3.JPG","/images/white-orange-round-cake.JPG", "/images/white-square-cake.JPG", "/images/white-blue-cake.JPG", "/images/cupcakes_circles.jpg"]
    return (
        <div className={styles.container}>
            {gallery.map(image => 
                <a key={image} className={styles.col} href="##"><img className={styles.colImg} src={image} alt="from instagram" /></a>
            )}
        </div>
    )
} 