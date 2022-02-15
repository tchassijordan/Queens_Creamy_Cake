import React from "react";
import styles from "./MainHomeContent.module.css";
import Intro from "./components/IntroSection";
import About from "./components/About";
import Explore from "./components/ExploreSection";
import ImageRedirector from "../../GeneralComponents/ImageRedirector";

//create reference to my objects
const images = ImageRedirector();

const bg_img = {
  backgroundImage: `url("${images["white-cake-bg.jpg"].default}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "rgba(243, 239, 239, 0.952)",
  height: "100%",
  filter: "blur(5px)",
  gridColumn: "1 / -1",
  gridRow: "1 / -1",
};

export default function MainHomeContent() {
  return (
    <>
      <div>
        <About style={bg_img} />
        <Intro style={bg_img} />
        <div
          className={styles.logoImgContainer}
          style={{
            backgroundImage: `url("${images["tarte/tarte_10.jpg"].default}")`,
          }}
        ></div>
        <Explore />
        <div
          className={styles.logoImgContainer}
          style={{
            backgroundImage: `url("${images["home_img/home_cupcakes_1.jpg"].default}")`,
          }}
        ></div>
      </div>
    </>
  );
}
