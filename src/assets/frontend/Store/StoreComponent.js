import React from "react";
import CakeItem from "./CakeItem";
import styles from "./Cakes.module.css";

export default function StoreComponent(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>{props.title}</h2>
      <hr />
      {props.exploreComponent ? <props.exploreComponent /> : null}
      <div className={styles.cakeContainer}>
        {props.data.map((item) => (
          <CakeItem
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            dimension={item.dimension}
            desc={item.description}
            category={item.category}
            price={item.price}
            info={item.price}
          />
        ))}
      </div>
    </div>
  );
}
