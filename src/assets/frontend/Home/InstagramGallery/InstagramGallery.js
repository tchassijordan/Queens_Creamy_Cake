import React from "react";
import styles from "./InstagramGallery.module.css"
import ImageRedirector from "../../GeneralComponents/ImageRedirector"; 

//create reference to my images objects
const images = ImageRedirector();

export default function InstagramGallery() {
    const gallery = [images["anniversary-cake.jpg"].default, images["twins-cake.jpg"].default, images["anniversary-promo-cake.jpg"].default, images["white-gold-cake3.jpg"].default, images["white-orange-round-cake.jpg"].default, images["white-square-cake.jpg"].default, images["white-blue-cake.jpg"].default, images["cupcakes_circles.jpg"].default]
    return (
        <div className={styles.container}>
            {gallery.map(image => 
                <a key={image} className={styles.col} href="##"><img className={styles.colImg} src={image} alt="from instagram" /></a>
            )}
        </div>
    )
} 