import React, { useState, useEffect } from "react";
import CakeItem from "./CakeItem"
import styles from "./Cakes.module.css"
import { CSSTransition } from "react-transition-group";
import expandTransition from "../GeneralComponents/transitions/expand.module.css"
import * as API from "../business/bs_utility"

export default function Cakes() {
    let [isReady, setIsReady] = useState(false)
    let [cakesFix, setCakesFix] = useState([])
    let cakes = cakesFix
    const [isAll, setIsAll] = useState(false)
    const [isWedding, setIsWedding] = useState(false)
    const [isTradWedding, setIsTradWedding] = useState(false)
    const [isClassicWedding, setIsClassicWedding] = useState(false)
    const [isBirthday, setIsBirthday] = useState(false)
    const [isSimple, setIsSimple] = useState(false)
    const [isHeartShape, setIsHeartShape] = useState(false)
    const [isSquareShape, setIsSquareShape] = useState(false)
    const [isNumberShape, setIsNumberShape] = useState(false)
    const [isRoundShape, setIsRoundShape] = useState(false)
    const [isBarbieShape, setIsBarbieShape] = useState(false)
    const [isRectangularShape, setIsRectangularShape] = useState(false)
    const [isCupcake, setIsCupcake] = useState(false)
    const [isCreamy, setIsCreamy] = useState(false)
    const [isNotCreamy, setIsNotCreamy] = useState(false)

    const getCakes = async () => {
        const data = await API.handleAllItems('cake');
        setCakesFix(data)
        setIsReady(true)
    }

    useEffect(()=> {
        if(!isReady) {
            getCakes();
        }
    })

    const setInitial = () => {
        setIsAll(false)
        setIsBirthday(false)
        setIsSimple(false)
        setIsWedding(false)
        setIsCupcake(false)
    }

    const setInitialWedding = () => {
        setIsTradWedding(false)
        setIsClassicWedding(false)
    }

    const setInitialCupcake = () => {
        setIsCreamy(false)
        setIsNotCreamy(false)
    }

    const setInitialSimpleCake = () => {
        setIsHeartShape(false)
        setIsSquareShape(false)
        setIsNumberShape(false)
        setIsRoundShape(false)
        setIsBarbieShape(false)
        setIsRectangularShape(false)
    }

    const activeNavLink = {
        backgroundColor: 'lightslategray'
    }

    const activeNavWLink = {
        color: 'white',
        backgroundColor: 'rgba(119, 136, 153, 0.911)'
    }

    const Explore = () => {
        return (
            <div className={styles.navBig}>
                <ul className={styles.nav}>
                    <li className={styles.navLink}
                        style={isAll ? activeNavLink : null}
                        onClick={
                            () => {
                                setInitial()
                                setIsAll(!isAll)
                            }}
                    >All</li>
                    <li className={styles.navLink}
                        style={isWedding ? activeNavLink : null}
                        onClick={
                            () => {
                                setInitial()
                                setIsWedding(!isWedding)
                                setInitialWedding()
                            }}
                    >Wedding Cakes</li>
                    <li className={styles.navLink}
                        style={isBirthday ? activeNavLink : null}
                        onClick={
                            () => {
                                setInitial()
                                setIsBirthday(!isBirthday)
                            }}
                    >Birthday Cakes</li>
                    <li className={styles.navLink}
                        style={isSimple ? activeNavLink : null}
                        onClick={
                            () => {
                                setInitial()
                                setIsSimple(!isSimple)
                                setInitialSimpleCake()
                            }
                        }
                    >Simple Cakes</li>
                    <li className={styles.navLink}
                        style={isCupcake ? activeNavLink : null}
                        onClick={
                            () => {
                                setInitial()
                                setIsCupcake(!isCupcake)
                                setInitialCupcake()
                            }}
                    >Cupcakes</li>
                </ul>
                <CSSTransition
                    in={isWedding}
                    timeout={300}
                    classNames={expandTransition}
                    unmountOnExit
                >
                    <ul className={styles.navW}>
                        <li className={styles.navWLink}
                            style={isClassicWedding ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialWedding()
                                    setIsClassicWedding(!isClassicWedding)
                                }
                            }
                        >Classical Wedding Cakes</li>
                        <li className={styles.navWLink}
                            style={isTradWedding ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialWedding()
                                    setIsTradWedding(!isTradWedding)
                                }
                            }
                        >Traditional Wedding Cakes</li>
                    </ul>
                </CSSTransition>
                <CSSTransition
                    in={isSimple}
                    timeout={300}
                    classNames={expandTransition}
                    unmountOnExit
                >
                    <ul className={styles.navW}>
                        <li className={styles.navWLink}
                            style={isHeartShape ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialSimpleCake()
                                    setIsHeartShape(!isHeartShape)
                                }
                            }>Heart Shapes</li>
                        <li className={styles.navWLink}
                            style={isSquareShape ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialSimpleCake()
                                    setIsSquareShape(!isSquareShape)
                                }
                            }
                        >Square Shapes</li>
                        <li className={styles.navWLink}
                            style={isNumberShape ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialSimpleCake()
                                    setIsNumberShape(!isNumberShape)
                                }
                            }
                        >Number Shapes</li>
                        <li className={styles.navWLink}
                            style={isRoundShape ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialSimpleCake()
                                    setIsRoundShape(!isRoundShape)
                                }
                            }
                        >Round Shapes</li>
                        <li className={styles.navWLink}
                            style={isBarbieShape ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialSimpleCake()
                                    setIsBarbieShape(!isBarbieShape)
                                }
                            }
                        >Barbie Cakes</li>
                        <li className={styles.navWLink}
                            style={isRectangularShape ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialSimpleCake()
                                    setIsRectangularShape(!isRectangularShape)
                                }
                            }
                        >Rectangular Shapes</li>
                    </ul>
                </CSSTransition>
                <CSSTransition
                    in={isCupcake}
                    timeout={300}
                    classNames={expandTransition}
                    unmountOnExit
                >
                    <ul className={styles.navW}>
                        <li className={styles.navWLink}
                            style={isNotCreamy ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialCupcake()
                                    setIsNotCreamy(!isNotCreamy)
                                }
                            }
                        >Simple Cupcakes</li>
                        <li className={styles.navWLink}
                            style={isCreamy ? activeNavWLink : null}
                            onClick={
                                () => {
                                    setInitialCupcake()
                                    setIsCreamy(!isCreamy)
                                }
                            }
                        >Cupcakes with Cream</li>
                    </ul>
                </CSSTransition>
            </div>
        )
    }

    const cakesHandler = () => {
        if (isWedding) {
            cakes = cakesFix.filter(cake => cake.category.parent_type === "wedding")
            if (isTradWedding && isWedding && !isClassicWedding)
                cakes = cakesFix.filter(cake => cake.category.parent_type === "wedding" && cake.category.type === "traditional")
            else if (isClassicWedding && isWedding && !isTradWedding)
                cakes = cakesFix.filter(cake => cake.category.parent_type === "wedding" && cake.category.type === "classical")
            return cakes
        } else if (isBirthday)
            cakes = cakesFix.filter(cake => cake.category.parent_type === "birthday")
        else if (isSimple) {
            cakes = cakesFix.filter(cake => cake.category.type === "simple")
            if (isHeartShape)
                cakes = cakesFix.filter(cake => cake.category.type === "simple" && cake.category.shape === "heart")
            else if (isSquareShape)
                cakes = cakesFix.filter(cake => cake.category.type === "simple" && cake.category.shape === "square")
            else if (isNumberShape)
                cakes = cakesFix.filter(cake => cake.category.type === "simple" && cake.category.shape === "number")
            else if (isRoundShape)
                cakes = cakesFix.filter(cake => cake.category.type === "simple" && cake.category.shape === "round")
            else if (isBarbieShape)
                cakes = cakesFix.filter(cake => cake.category.type === "simple" && cake.category.shape === "barbie")
            else if (isRectangularShape)
                cakes = cakesFix.filter(cake => cake.category.type === "simple" && cake.category.shape === "rectangular")
            return cakes
        } else if (isCupcake) {
            cakes = cakesFix.filter(cake => cake.category.parent_type === "cupcakes")
            if (isCreamy)
                cakes = cakesFix.filter(cake => cake.category.parent_type === "cupcakes" && cake.category.type === "cream")
            else if (isNotCreamy)
                cakes = cakesFix.filter(cake => cake.category.parent_type === "cupcakes" && cake.category.type === "no-cream")
            return cakes
        } else if (isAll)
            cakes = cakesFix
        return cakes
    }

    cakesHandler()

    const cakesDisplay = cakes.map(cake =>
        <CakeItem
            key={cake.id}
            id={cake.id}
            title={cake.title}
            img={cake.img}
            dimension={cake.dimension}
            desc={cake.description}
            price={cake.price}
            category={cake.category}
        />
    )

    return (
        <div className={styles.container}>
            {
                isReady ? 
                <> 
                
                    <h2 className={styles.mainTitle}>Cakes</h2>
                    <hr />
                    <Explore />
                    <div className={styles.cakesHolder}>
                        <div className={styles.cakeContainer}>
                            {cakesDisplay}
                        </div>
                    </div>
                </> 
                :
                <h1>Data is loading...</h1>
            }
            

        </div>

    )
}