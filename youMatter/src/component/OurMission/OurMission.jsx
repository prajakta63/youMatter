import React from "react";
import styles from "./OurMission.module.css";
import { getImageUrl } from "../../utils";

export const OurMission = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Mission</h2>
        <div className={styles.subContainer}>

          <div className={styles.content}>
            <p className={styles.description}>
              We aim to empower <br/> individuals by providing a <br/> safe & supportive
              platform <br/> to share their feelings, find <br/> comfort, & improve their <br/>
              mental well-being.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={getImageUrl("mission/brain.png")}
              alt="Happy brain"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </>
  )
};
