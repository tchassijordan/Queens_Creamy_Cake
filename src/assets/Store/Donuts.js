import React from "react"
import styles from "./Cakes.module.css"
import CakeItem from "./CakeItem"
import data from "./Cake.json"

export default function Donuts() {
    return (
        <div className={styles.container}>
            <h2 className={styles.mainTitle}>Donuts</h2>
            <hr />
            <div className={styles.cakeContainer}>
                {data.donuts.map(donut => 
                    <CakeItem 
                        key={donut.id} 
                        title={donut.title} 
                        img={donut.img} 
                        dimension={donut.dimension} 
                        desc={donut.description} 
                    />
                )}
            </div>
        </div>
    )
}