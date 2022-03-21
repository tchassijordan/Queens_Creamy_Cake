import { Link } from "react-router-dom";
import styles from "../MainHomeContent.module.css";
import Gelato from "../../svg/Gelato";

const ExplorableItem = ({ props, picture, bgColor, description }) => {
  return (
    <div className={styles.exploreItem}>
      <div
        className={styles.exploreItemDes}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <p className={styles.exploreItemDesText}>{description}</p>
        <Link
          className={styles.viewMenuBtn}
          to={{
            pathname: `/Queens_Creamy_Cake/store/${props.category.parent_name}/${props.id}`,
            state: { props },
          }}
        >
          Explore
        </Link>
      </div>
      <div className={styles.styledExploreImg}>
        <Gelato style={styles.gelato} fill={bgColor} />
        <img
          className={styles.exploreItemImg}
          src={picture}
          alt="Explore best seller item"
        />
      </div>
    </div>
  );
};

export default ExplorableItem;
