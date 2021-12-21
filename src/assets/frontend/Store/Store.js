import React from "react";
import Cakes from "./Cakes";
import Packs from "./Packs";
import Donuts from "./Donuts";  
import styles from "./Store.module.css"          
import Tarte from "./Tarte";
import Popcake from "./Popcake";
import QuicheLoriane from "./QuicheLoriane";
import PastelDeViande from "./PastelDeViande";

export default function Store() {
    return (
        <div className={styles.container}>
            <h1>Store</h1>
            <Packs />
            <Cakes />
            <Donuts />
            <Tarte />
            <Popcake />
            <QuicheLoriane />
            <PastelDeViande />
        </div>
    )
}