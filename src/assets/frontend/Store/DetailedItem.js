import React, { useState, useEffect, useRef } from "react";
import * as API from "../../business/bs_utility";
import styles from "./DetailedItem.module.css";

export default function DetailedItem({ match, location }) {
  let [isReady, setIsReady] = useState(false);
  const [data, setData] = useState({});

  const getItem = async () => {
    const data = await API.handleItem(
      location.state.props.category.parent_name,
      match.params.id
    );
    setData(data);
    setIsReady(true);
  };

  useEffect(() => {
    if (!isReady) {
      getItem();
    }
  });

  const mainImgRef = useRef();
  const imgCollectionRef = useRef([]);

  function handleActiveImage(e) {
    [
      mainImgRef.current.src,
      imgCollectionRef.current[e.target.dataset.index].src,
    ] = [
      imgCollectionRef.current[e.target.dataset.index].src,
      mainImgRef.current.src,
    ];
  }

  const addToRef = (el) => {
    if (el && !imgCollectionRef.current.includes(el)) {
      imgCollectionRef.current.push(el);
    }
  };

  return (
    <main>
      {isReady ? (
        <>
          <div className={styles.container}>
            <div className={styles.details_container}>
              <div className={styles.images_container}>
                <img
                  src={data.img}
                  className={styles.mainImgHolder}
                  alt="specific item"
                  ref={mainImgRef}
                />
                {data.sub_images ? (
                  <div className={styles.side_images_area}>
                    {data.sub_images.map((url, index) => (
                      <img
                        ref={addToRef}
                        src={url}
                        alt="extented imagery"
                        key={url}
                        data-index={index}
                        className={styles.inactiveImg}
                        onClick={(e) => handleActiveImage(e)}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              <div className={styles.info_container}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.priceArea}>
                  <strong style={{ opacity: "0.8" }}>Prix: </strong>
                  <span className={styles.price}>{data.price}</span>
                  <span className={styles.priceCurrency}>cfa</span>
                </p>

                <div className={styles.descriptionArea}>
                  <p className={styles.descriptionTitle}>Description</p>
                  <div className={styles.description}>
                    <p className={styles.descriptionSubTitle}>
                      Product Details
                    </p>
                    <p className={styles.descriptionText}>{data.description}</p>
                  </div>
                  <p className={styles.dimension}>
                    <strong style={{ fontSize: "0.8rem", fontWeight: "700" }}>
                      Dimension:{" "}
                    </strong>{" "}
                    <span className={styles.dimensionNum}>
                      {data.dimension}
                    </span>
                  </p>
                </div>
                <div className={styles.deliveryInfoArea}>
                  <p className={styles.deliveryInfoTitle}>
                    Delivery Information
                  </p>
                  <ul className={styles.list}>
                    {data.delivery_information.map((text) => (
                      <li className={styles.listItem} key={text}>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.careInfoArea}>
                  <p className={styles.careInfoTitle}>Care Information</p>
                  <ul className={styles.list}>
                    {data.care_information.map((text) => (
                      <li className={styles.listItem} key={text}>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.reviews_container}>
              <h3 className={styles.reviewTitle}>
                What others say about this product
              </h3>
              <div className={styles.reviewFlex}>
                {data.reviews.map((review) => (
                  //remember to include key prop
                  <div key={review.id} className={styles.reviewItem}>
                    <div className={styles.reviewerInfo}>
                      <img
                        src={review.img}
                        className={styles.reviewerImg}
                        alt="reviewer profile"
                      />
                      <p className={styles.reviewerName}>{review.username}</p>
                    </div>
                    <div className={styles.reviewDescription}>
                      {/* <p className={styles.reviewRating}> {review.rating.map(star => <span>{star}</span>)} </p> */}
                      <p className={styles.reviewRating}>
                        &#9733; &#9733; &#9733; &#9733;{" "}
                      </p>
                      <p className={styles.reviewText}>{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.featuredSection}></div>
          </div>
        </>
      ) : (
        <>
          <h3>The data is still loading please wait...</h3>
        </>
      )}
    </main>
  );
}
