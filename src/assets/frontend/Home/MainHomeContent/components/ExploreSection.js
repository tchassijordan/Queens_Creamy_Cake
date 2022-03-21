import React from "react";
import styles from "../MainHomeContent.module.css";
import StateHandler from "../../../../business/StateHandler";
import ExplorableItem from "./ExplorableItem";

export default function Explore() {
  const { data, isReady } = StateHandler("best_sellers");
  return (
    <div style={{ width: "95%", overflowX: "hidden", margin: "0 auto" }}>
      {isReady ? (
        <>
          <h1 className={styles.exploreTitle}>Best Sellers</h1>
          <div className={styles.exploreContainer}>
            {data.map((item) => (
              <ExplorableItem
                key={item.id}
                props={item}
                picture={item.img}
                description={item.description}
                bgColor={item.theme}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
