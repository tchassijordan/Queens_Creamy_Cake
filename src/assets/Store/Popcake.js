import React from "react"
import styles from "./Cakes.module.css"
import CakeItem from "./CakeItem"
import data from "./Cake.json"

export default function Popcake() {
    return (
        <div className={styles.container}>
            <h2 className={styles.mainTitle}>Popcakes</h2>
            <hr />
            <div className={styles.cakeContainer}>
                {data.popcake.map(popcake => 
                    <CakeItem 
                        key={popcake.id} 
                        title={popcake.title} 
                        img={popcake.img} 
                        dimension={popcake.dimension} 
                        desc={popcake.description} 
                    />
                )}
            </div>
        </div>
    )
}