import React from 'react';
import styles from './ExpressAndConnect.module.css';
import { getImageUrl } from "../../utils";

export const ExpressAndConnect = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Express and Connect</h1>
      <p className={styles.subheading}>Your Safe Space to Share Feelings</p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img
            src={getImageUrl("expressAndConnect/MoodReflection.png")}
            alt="Mood & Reflection Journal"
            className={styles.cardImage}
          />
          <h2 className={styles.cardTitle}>Mood & Reflection Journal</h2>
          <p className={styles.cardDescription}>
            Your own space to track moods & journal emotions.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src={getImageUrl("expressAndConnect/AIChat.png")}
            alt="Comforting Conversations"
            className={styles.cardImage}
          />
          <h2 className={styles.cardTitle}>Comforting Conversations</h2>
          <p className={styles.cardDescription}>
            Chat with our AI to share your feelings.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src={getImageUrl("expressAndConnect/PersonalizedPathway.png")}
            alt="Relaxing Pathways"
            className={styles.cardImage}
          />
          <h2 className={styles.cardTitle}>Relaxing Pathways</h2>
          <p className={styles.cardDescription}>
            Tailored guidance for your emotional well-being.
          </p>
        </div>
      </div>
    </section>
  );
};
