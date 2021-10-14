import React from "react";
import '../../App.css'
import styles from "./MainHomeContent.module.css"

const bg_img = {
    backgroundImage: 'url("/images/white-cake-bg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(243, 239, 239, 0.952)',
    height: '100%',
    filter: 'blur(5px)',
    gridColumn: '1 / -1',
    gridRow: '1 / -1'
}

const About = () => {
    
    return (
        <div className={styles.Container}>
            <div style={bg_img}></div>
            <div className={styles.about}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur nunc id 
                    malesuada egestas. Duis scelerisque varius augue, in efficitur arcu. Sed congue 
                    vehicula nunc vitae luctus. Etiam facilisis gravida risus at lobortis. Cras vel 
                    tortor vehicula, faucibus sem nec, egestas est. Nunc pellentesque congue erat, eget 
                    bibendum erat consequat non. Proin ac lectus vitae lorem ornare rutrum. Vivamus 
                    condimentum odio leo, maximus condimentum felis fringilla vel. Praesent egestas 
                    mollis elit. Etiam quis orci id turpis consectetur vulputate eget euismod purus. 
                    Maecenas magna eros, sagittis non elit sed, fermentum viverra tortor. Maecenas sit 
                    amet lacinia quam. Aliquam nec lorem et felis dignissim gravida
                </p>
                <p>
                    Mauris vitae ligula posuere, consectetur ipsum in, bibendum elit. Suspendisse eu 
                    risus nec dui porttitor tristique id at arcu. Vestibulum fringilla, nulla venenatis 
                    tempor pretium, lectus mauris feugiat augue, eget tincidunt libero dolor a est. 
                    Vestibulum pretium auctor interdum. Nulla tellus tellus, lacinia nec odio nec, 
                    facilisis pretium lectus. Praesent maximus velit dolor, nec pellentesque nisl porta 
                    a. Nunc tincidunt suscipit ante. Pellentesque habitant morbi tristique senectus et 
                    netus et malesuada fames ac turpis egestas. Aenean ut turpis ut ligula malesuada 
                    feugiat. Nullam vel molestie sapien. Morbi euismod tincidunt consectetur.
                </p>
                <p>
                    Morbi placerat placerat arcu eu maximus. Integer magna nunc, accumsan ut nulla id, 
                    luctus rhoncus nulla. Curabitur ut risus tortor. Vestibulum quis hendrerit mauris, 
                    vitae vulputate quam. In sit amet pharetra velit. Pellentesque ut felis felis. Nullam
                    mattis sit amet velit nec vehicula. Nulla ut egestas odio. Cras at posuere enim, at 
                    commodo leo. Phasellus finibus, elit fermentum placerat luctus, dolor purus vestibulum 
                    augue, nec ultricies orci orci ut nunc. Etiam id tellus at elit sagittis vulputate. 
                    Nulla vitae quam et est volutpat dictum. Praesent pulvinar risus id velit dictum, sit 
                    amet convallis dolor tincidunt. Sed vel dui sagittis lacus suscipit fringilla. Morbi 
                    elementum odio in orci efficitur aliquam
                </p>
                <a className={styles.readMoreBtn} href="##">Read More</a>
            </div>
        </div>
    )
}

const Intro = () => {
    const bgg_img = {
        ...bg_img,
        backgroundImage: 'url("/images/pink-bg4.png")',
        filter: 'blur(5px)',
    }
    return (
        <div className={styles.Container}>
            <div style={bgg_img}></div>
            <div className={styles.introContainer}>
                <div className={styles.introItem}>
                    <img className={styles.introItemImg} src="/images/chocolate.jpg" alt="packs" />
                    <div className={styles.introItemText}>
                        <h3 className={styles.introItemTextTitle}>Explore Our Packs</h3>
                        <p className={styles.introItemTextDes}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className={styles.introItem}>
                    <img className={styles.introItemImg} src="/images/cupcake3.jpg" alt="cupcakes" />
                    <div className={styles.introItemText}>
                        <h3 className={styles.introItemTextTitle}>Cupcakes</h3>
                        <p className={styles.introItemTextDes}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

const Explore = () => {
    return (
        <div className={styles.exploreContainer}>
            <div className={styles.exploreItem}>
                <div className={styles.exploreItemDes}
                    style={{ backgroundColor: 'rgba(128, 0, 128, 0.658)' }}
                >
                    {/* <h3 className={styles.exploreItemDesTitle}>Menu</h3> */}
                    <p className={styles.exploreItemDesText}>Visit our <strong>Menu</strong> and enjoy our goodies</p>
                    <a className={styles.viewMenuBtn} href="##" >View Menu</a>
                </div>
                <img className={styles.exploreItemImg} src="/images/triangle_slice.jpg" alt="Explore Menu" />
            </div>
            <div className={styles.exploreItem}>
                <div className={styles.exploreItemDes}>
                    {/* <h3 className={styles.exploreItemDesTitle}>Customize your cakes</h3> */}
                    <p className={styles.exploreItemDesText}>
                        Choose the <strong>flavour, aroma, shape </strong> of your cakes, and we'll make is come to life.
                    </p>
                    <a className={styles.customizeBtn} href="##">Customize</a>
                </div>
                <img className={styles.exploreItemImg} src="/images/yellow_cake.jpg" alt="Best Cakes" />
            </div>
        </div>
    )
}

// const Video = () => {
//     return (
//         <div >
//             <video className={styles.vid} autoPlay muted loop>
//                 <source src="/images/filterList-vid.webm" type="video/webm" />
//             </video>
//         </div>
//     )
// }

export default function MainHomeContent() {
    return (
        <>
            <div>
                <About />
                <Intro />
                <img className={styles.afImg} src="/images/chocolate.jpg" alt="Donuts" />
                {/* <Video /> */}
                <Explore />
                <div className={styles.logoImgContainer}>
                    <img className={styles.logoImg} src="/images/logo_big.jpeg" alt="Logo" /> 
                </div>
            </div>
        </>
    )
}