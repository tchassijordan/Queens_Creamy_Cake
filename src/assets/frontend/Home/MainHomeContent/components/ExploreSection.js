import React from "react";
import styles from "../MainHomeContent.module.css";
import Gelato from "../../svg/Gelato";

export default function Explore() {
  return (
    <div className={styles.exploreContainer}>
      <div className={styles.exploreItem}>
        <div
          className={styles.exploreItemDes}
          style={{ backgroundColor: "rgba(128, 0, 128, 1)" }}
        >
          {/* <h3 className={styles.exploreItemDesTitle}>Menu</h3> */}
          <p className={styles.exploreItemDesText}>
            Visit our <strong>Menu</strong> and enjoy our goodies
          </p>
          <a className={styles.viewMenuBtn} href="##">
            View Menu
          </a>
        </div>
        <div className={styles.styledExploreImg}>
          <Gelato style={styles.gelato} fill="rgba(128, 0, 128, 1)" />
          <img
            className={styles.exploreItemImg}
            src="https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fpastel_de_viande%2Fpastel_de_viande_1.jpg?alt=media&token=c21b3e27-4301-45c4-8072-f38d4c64ddb1"
            alt="Explore Menu"
          />
        </div>
      </div>
      <div className={styles.exploreItem}>
        <div className={styles.exploreItemDes}>
          {/* <h3 className={styles.exploreItemDesTitle}>Customize your cakes</h3> */}
          <p className={styles.exploreItemDesText}>
            Choose the <strong>flavour, aroma, shape </strong> of your cakes,
            and we'll make is come to life.
          </p>
          <a className={styles.customizeBtn} href="##">
            Customize
          </a>
        </div>
        <div className={styles.styledExploreImg}>
          <Gelato style={styles.gelato} fill="white" />
          <img
            className={styles.exploreItemImg}
            src="https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fcakes%2Fnormal_cakes%2Fnormal-cake_16.jpg?alt=media&token=a2308ba5-e7ae-4598-b388-c4fafc55d95f"
            alt="Best Cakes"
          />
        </div>
      </div>
    </div>
  );
}
