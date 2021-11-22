import React from "react"
import styles from "../MainHomeContent.module.css"

export default function About(props) {
    return (
        <div className={styles.Container}>
            <div style={props.style} />
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