import React from "react"
import styles from "./Cakes.module.css"
import CakeItem from "./CakeItem"
import data from "./Cake.json"

export default function QuicheLoriane() {
    return (
        <div className={styles.container}>
            <h2 className={styles.mainTitle}>Quiche Loriane</h2>
            <hr />
            <div className={styles.cakeContainer}>
                {data.quiche_loriane.map(quiche => 
                    <CakeItem 
                        key={quiche.id} 
                        title={quiche.title} 
                        img={quiche.img} 
                        dimension={quiche.dimension} 
                        desc={quiche.description} 
                    />
                )}
            </div>
        </div>
    )
}