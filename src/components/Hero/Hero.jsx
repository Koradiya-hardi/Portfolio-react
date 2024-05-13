import React from 'react';
import { getImageUrl } from '../../utils';
import styles from '../Hero/Hero.module.css'

const Hero = ( ) => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, i am Hardi </h1>
            <p className={styles.decription}>
            A passionate individual who always thrives to work on end to end products 
               which develop sustainable and scalable social and technical systems to create 
               impact.
            </p>
            <a href='mailto:hardipatel1915@gmail.com' className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='hero-img'  className={styles.heroImg}/>
        <div className={styles.topBlur} > </div>
        <div className={styles.bottomBlur}></div>
    </section>
    );
}

export default Hero;
