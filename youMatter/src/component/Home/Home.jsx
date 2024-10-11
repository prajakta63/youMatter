import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageContainer}>
        <img src={getImageUrl('home/selfCare.png')}
        alt="Self care illustration"
        className={styles.homeImage} />
      </div>
      <div className={styles.textContainer}>
        <h2>Your Safe Space to <br/> Share & Heal</h2>
        <p>Share your feelings and find comfort.</p>
        <button className={styles.startBtn}>Get Started</button>
      </div>
    </div>
  )
}

