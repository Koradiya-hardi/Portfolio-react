import React from 'react';
import styles from './About.module.css'
import { getImageUrl } from '../../utils';

const About = () => {
    return (
        <section className={styles.container} id='about'>

            <h2 className={styles.title}>About</h2>

            <div className={styles.content}>

                 <img className={styles.aboutImage}
                 src={getImageUrl('about/aboutImage.png') } alt='me'/>

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt='cursonr icon'/>
                        <div className={styles.aboutItemtext}>
                            <h3>Frontend development</h3>
                            <p>I am frontend developer with an expirence in building responsive web designs 
                                and optimized sites  using frontend technologies.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt='cursonr icon'/>
                        <div className={styles.aboutItemtext}>
                            <h3>Backend development</h3>
                            <p>I specialize in building the core logic and functionality that powers web applications, ensuring 
                                they run smoothly and 
                                efficiently. Below are some of the key technologies and projects I've worked on:
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt='server icon'/>
                        <div className={styles.aboutItemtext}>
                            <h3>UI Designer</h3>
                            <p>I am learning to desgin websites, desginig multiple landing pages
                                using responsive web tecnologies and figma.
                            </p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
    );
}

export default About;
