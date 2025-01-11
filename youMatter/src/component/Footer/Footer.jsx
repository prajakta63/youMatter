import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>YouMatter</div>
      <div className={styles.socialIcons}>
        <a
          href="https://www.instagram.com/your-instagram-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={styles.iconLink}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/your-facebook-page"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={styles.iconLink}
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/your-twitter-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className={styles.iconLink}
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.iconLink}
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

