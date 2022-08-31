import React from "react";
import { Link } from "react-router-dom";
import styles from "./CakeItem.module.css";

export default function CakeItem(props) {
  //const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.containerBig}>
      <div className={styles.imgContainer}>
        <img className={styles.cakeImg} src={`${props.img}`} alt="cake" />
        <p className={styles.price}>
          <strong className={styles.priceIn}>Price: </strong>
          {props.price}
        </p>
      </div>

      <div className={styles.about}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.dimension}>Dimension: {props.dimension}</p>
        <p className={styles.description}>{props.desc}</p>
        <Link
          className={styles.btn}
          to={{
            pathname: `/store/${props.category.parent_name}/${props.id}`,
            state: { props },
          }}
          //onClick={()=>setIsOpen(!isOpen)}
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
