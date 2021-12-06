import React, { useRef, useState, useEffect } from "react";
import styles from "./Carousel.module.css" 
import { CSSTransition } from 'react-transition-group'; 
import fadeTransition from '../../GeneralComponents/transitions/fadeTransition.module.css'
import {MdPauseCircleFilled, MdPlayCircleFilled} from 'react-icons/md'
import { BiRightArrow, BiLeftArrow} from 'react-icons/bi'
import ImageRedirector from "../../GeneralComponents/ImageRedirector"; 

//create reference to my objects
const images = ImageRedirector();

export default function Slide(props) {
    const gallery =  [images["musical.jpg"].default, images["yellow_cake.jpg"].default, images["cupcakes_circles.jpg"].default, images["rainbow-cake.jpg"].default]
    const [count, setCount] = useState(0) 
    const [isRunning, setIsRunning] = useState(true)
    function checkCount() {
        const previousCount = count
        if (previousCount > gallery.length - 2) 
            setCount(0)
    }
    
    const callback = () => {
        //Can read new state and props
        setCount(count+1)
        checkCount()
    }

    function useInterval(callback, delay) {
        //create my reference object
        const savedCallback = useRef()

        useEffect(()=>{
            //after every render save the newest callback our reference object
            savedCallback.current = callback
        })
    
        useEffect(() => {
            function tick() {
                //call the latest timer 
                savedCallback.current();
            }
            
            /*Using delay instead of isRunning because useEffect won't trigger a re-render when a boolean changes
            Whereas delay here is a parameter which isn't a boolean, and changes depending on isRunning state. 
             */
            if(delay !== null) {
                let timer = setInterval(tick, delay)
                return () => clearInterval(timer)
            }  
        },[delay])
    }

    useInterval(callback, isRunning ? 5000: null)

    const currentImg = gallery[count]

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
            {isRunning ? 
                <MdPauseCircleFilled 
                    className={styles.pi}
                    onClick={()=> setIsRunning(!isRunning)}
                />
            : <MdPlayCircleFilled 
                    className={styles.pi}
                    onClick={() => setIsRunning(!isRunning)}
                />
            }
            
            <div className={styles.ni_ppi}>
                <BiLeftArrow 
                    className={styles.ppi} 
                    onClick={() => {
                        setCount(()=> count-1)
                        if(count <= 0) 
                            setCount(gallery.length - 1)
                        
                    }}
                />
                <BiRightArrow 
                    className={styles.ni} 
                    onClick={()=>{
                        setCount(()=> count+1)
                        checkCount()
                    }}
                />  
            </div>
        </section>
    )
}