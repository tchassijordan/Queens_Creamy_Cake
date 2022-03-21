import React from "react";
import { Link } from "react-router-dom";
import styles from "../MainHomeContent.module.css";

export default function About(props) {
  return (
    <div className={styles.about}>
      <div className={styles.about_section}>
        <img
          className={styles.about_section_img}
          src="https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fhome_img%2Ftyson-baking.jpg?alt=media&token=5fdbbfd6-6680-456d-bed4-22bd96f5a839"
          alt="baking in action"
        />
        <p className={styles.about_section_text}>
          Mauris vitae ligula posuere, consectetur ipsum in, bibendum elit.
          Suspendisse eu risus nec dui porttitor tristique id at arcu.
          Vestibulum fringilla, nulla venenatis tempor pretium, lectus mauris
          feugiat augue, eget tincidunt libero dolor a est. Vestibulum pretium
          auctor interdum. Nulla tellus tellus, lacinia nec odio nec, facilisis
          pretium lectus. Praesent maximus velit dolor, nec pellentesque nisl
          porta a. Nunc tincidunt suscipit ante. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Aenean ut turpis ut ligula malesuada feugiat. Nullam vel molestie
          sapien. Morbi euismod tincidunt consectetur.
        </p>
      </div>
      <div className={styles.about_section}>
        <img
          style={window.innerWidth >= 560 ? { order: "10" } : null}
          className={styles.about_section_img}
          src="https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fhome_img%2Ftoy_chef.jpg?alt=media&token=4c01abc6-edb9-480b-94a8-08c157981953"
          alt="chef in action"
        />
        <p className={styles.about_section_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur nunc id malesuada egestas. Duis scelerisque varius augue,
          in efficitur arcu. Sed congue vehicula nunc vitae luctus. Etiam
          facilisis gravida risus at lobortis. Cras vel tortor vehicula,
          faucibus sem nec, egestas est. Nunc pellentesque congue erat, eget
          bibendum erat consequat non. Proin ac lectus vitae lorem ornare
          rutrum. Vivamus condimentum odio leo, maximus condimentum felis
          fringilla vel. Praesent egestas mollis elit. Etiam quis orci id turpis
          consectetur vulputate eget euismod purus. Maecenas magna eros,
          sagittis non elit sed, fermentum viverra tortor. Maecenas sit amet
          lacinia quam. Aliquam nec lorem et felis dignissim gravida
        </p>
      </div>
      <Link className={styles.readMoreBtn} to="/Queens_Creamy_Cake/about">
        Read More
      </Link>
    </div>
  );
}
