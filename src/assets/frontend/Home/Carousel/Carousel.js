import React, { useRef, useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { CSSTransition } from "react-transition-group";
import fadeTransition from "../../GeneralComponents/transitions/fadeTransition.module.css";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export default function Slide(props) {
  const gallery = [
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fcakes%2Fwedding_cakes%2Fwedding_cake_4.jpg?alt=media&token=88ff729b-9291-40f4-ba24-6c66f7d4c4f4",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fdonuts%2Fdonut_13.jpg?alt=media&token=7df5f094-8b40-4e54-98ff-3db1a2c02b60",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fhome_img%2Fhome_cupcakes_1.jpg?alt=media&token=b5c94bc0-7d73-4aaa-a4ab-ba4c25f61ca3",
    "https://firebasestorage.googleapis.com/v0/b/queens-creamy-cake.appspot.com/o/images%2Fcakes%2Fwedding_cakes%2Fwedding_cake_10.jpg?alt=media&token=88ff729b-9291-40f4-ba24-6c66f7d4c4f4",
  ];
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  function checkCount() {
    const previousCount = count;
    if (previousCount > gallery.length - 2) setCount(0);
  }

  const callback = () => {
    //Can read new state and props
    setCount(count + 1);
    checkCount();
  };

  function useInterval(callback, delay) {
    //create my reference object
    const savedCallback = useRef();

    useEffect(() => {
      //after every render save the newest callback our reference object
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        //call the latest timer
        savedCallback.current();
      }

      /*Using delay instead of isRunning because useEffect won't trigger a re-render when a boolean changes
            Whereas delay here is a parameter which isn't a boolean, and changes depending on isRunning state. 
             */
      if (delay !== null) {
        let timer = setInterval(tick, delay);
        return () => clearInterval(timer);
      }
    }, [delay]);
  }

  useInterval(callback, isRunning ? 5000 : null);

  const currentImg = gallery[count];

  return (
    <section className={styles.carousel_c}>
      <CSSTransition
        in={true}
        timeout={300}
        classNames={fadeTransition}
        unmountOnExit
      >
        <img className={styles.slide} src={currentImg} alt="Cake carousel" />
      </CSSTransition>
      {isRunning ? (
        <MdPauseCircleFilled
          className={styles.pi}
          onClick={() => setIsRunning(!isRunning)}
        />
      ) : (
        <MdPlayCircleFilled
          className={styles.pi}
          onClick={() => setIsRunning(!isRunning)}
        />
      )}

      <div className={styles.ni_ppi}>
        <BiLeftArrow
          className={styles.ppi}
          onClick={() => {
            setCount(() => count - 1);
            if (count <= 0) setCount(gallery.length - 1);
          }}
        />
        <BiRightArrow
          className={styles.ni}
          onClick={() => {
            setCount(() => count + 1);
            checkCount();
          }}
        />
      </div>
    </section>
  );
}
