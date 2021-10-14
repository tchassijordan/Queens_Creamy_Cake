import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <p>Queens Creamy Cake</p>
                <p>Copyright 2021</p>
            </div>
        </div>
        
    )
}