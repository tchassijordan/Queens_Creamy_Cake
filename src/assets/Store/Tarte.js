import React from "react"
import styles from "./Cakes.module.css"
import CakeItem from "./CakeItem"
import data from "./Cake.json"

export default function Tarte() {
    return (
        <div className={styles.container}>
            <h2 className={styles.mainTitle}>Tarte</h2>
            <hr />
            <div className={styles.cakeContainer}>
                {data.tarte.map(tarte => 
                    <CakeItem 
                        key={tarte.id} 
                        title={tarte.title} 
                        img={tarte.img} 
                        dimension={tarte.dimension} 
                        desc={tarte.description} 
                    />
                )}
            </div>
        </div>
    )
}