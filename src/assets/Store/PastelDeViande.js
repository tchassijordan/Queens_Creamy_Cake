import React from "react"
import styles from "./Cakes.module.css"
import CakeItem from "./CakeItem"
import data from "./Cake.json"

export default function PastelDeViande() {
    return (
        <div className={styles.container}>
            <h2 className={styles.mainTitle}>Pastel de Viande</h2>
            <hr />
            <div className={styles.cakeContainer}>
                {data.pastel_de_viande.map(item => 
                    <CakeItem 
                        key={item.id} 
                        title={item.title} 
                        img={item.img} 
                        dimension={item.dimension} 
                        desc={item.description} 
                    />
                )}
            </div>
        </div>
    )
}