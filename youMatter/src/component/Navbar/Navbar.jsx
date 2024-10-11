import React from 'react';
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <h1>
          YouMatter
        </h1>
      </div>

      <ul className={styles.navbarLinks}>
        <li>
          <a href='Home'>Home</a>
        </li>
        <li>
          <a href='Services'>Services</a>
        </li>
        <li>
          <a href='About'>About</a>
        </li>
        <li>
          <a href='Login'>Login</a>
        </li>
      </ul>
    </nav>
  )
}
