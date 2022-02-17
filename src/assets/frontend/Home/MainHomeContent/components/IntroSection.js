import React from "react";
import styles from "../MainHomeContent.module.css";

export default function Intro(props) {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introItem}>
        <img
          className={styles.introItemImg}
          src="https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fchocolate.jpg?alt=media&token=d630a20c-c7fa-4c2b-93f5-76df430d424f"
          alt="Our Packs"
        />
        <div className={styles.introItemText}>
          <h3 className={styles.introItemTextTitle}>Explore Our Packs</h3>
          <p className={styles.introItemTextDes}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className={styles.introItem}>
        <img
          className={styles.introItemImg}
          src="https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fcakes%2Fcupcakes%2Fcupcake_4.jpg?alt=media&token=6fe03414-d26c-4ea0-8015-84679b1425b7"
          alt="explore our cupcakes"
        />
        <div className={styles.introItemText}>
          <h3 className={styles.introItemTextTitle}>Cupcakes</h3>
          <p className={styles.introItemTextDes}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
