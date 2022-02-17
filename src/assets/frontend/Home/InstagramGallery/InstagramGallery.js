import React from "react";
import styles from "./InstagramGallery.module.css";

export default function InstagramGallery() {
  const gallery = [
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Ftarte%2Ftarte_1.jpg?alt=media&token=e7f30f3d-26e1-4231-8be7-4ff5df092db9",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fquiche_loriane%2Fquiche_loriane_3.jpg?alt=media&token=9e659b4d-465d-48b6-8561-84e71bc17cb1",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fpastel_de_viande%2Fpastel_de_viande_13.jpg?alt=media&token=c21b3e27-4301-45c4-8072-f38d4c64ddb1",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fdonuts%2Fdonut_4.jpg?alt=media&token=7df5f094-8b40-4e54-98ff-3db1a2c02b60",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fcakes%2Fnormal_cakes%2Fnormal-cake_1.jpg?alt=media&token=a2308ba5-e7ae-4598-b388-c4fafc55d95f",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fcakes%2Fcupcakes%2Fcupcake_1.jpg?alt=media&token=6fe03414-d26c-4ea0-8015-84679b1425b7",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fcakes%2Fwedding_cakes%2Fwedding_cake_10.jpg?alt=media&token=88ff729b-9291-40f4-ba24-6c66f7d4c4f4",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Ftarte%2Ftarte_7.jpg?alt=media&token=e7f30f3d-26e1-4231-8be7-4ff5df092db9",
  ];
  return (
    <div className={styles.container}>
      {gallery.map((image) => (
        <a key={image} className={styles.col} href="##">
          <img className={styles.colImg} src={image} alt="from instagram" />
        </a>
      ))}
    </div>
  );
}
