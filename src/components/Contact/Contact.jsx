import React from 'react';
import styles from './Contact.module.css'
import {getImageUrl} from '../../utils'

const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt='email'/>
                    <a href='mailto:hardipatel1915@gmail.com'>hardipatel1915@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt='linkdin'/>
                    <a href='mailto:hardipatel1915@gmail.com'>Linkedin.com/hardi-patel</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt='email'/>
                    <a href='https://github.com/Koradiya-hardi'>Github Profile</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact;
