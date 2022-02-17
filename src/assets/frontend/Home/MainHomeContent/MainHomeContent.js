import React from "react";
import styles from "./MainHomeContent.module.css";
import Intro from "./components/IntroSection";
import About from "./components/About";
import Explore from "./components/ExploreSection";

export default function MainHomeContent() {
  return (
    <>
      <section>
        <About />
        <Intro />
        <div className={styles.logoImgContainer}></div>
        <Explore />
        <div
          className={styles.logoImgContainer}
          style={{
            backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fhome_img%2Fhome_cupcakes_1.jpg?alt=media&token=b5c94bc0-7d73-4aaa-a4ab-ba4c25f61ca3")`,
          }}
        ></div>
      </section>
    </>
  );
}
