import React, { useState } from 'react';
import styles from './LoginSignup.module.css';
import { getImageUrl } from '../../utils';

export const LoginSignup = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (isSignup) {
            console.log('Signup Data:', user);
        } else {
            console.log('Login Data:', { username, password });
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <img
                    src={getImageUrl('loginSignup/LoginSignupPage.png')}
                    alt="Mood & Reflection Journal"
                    className={styles.cardImage}
                />
            </div>
            <div className={styles.card}>
                {isSignup ? (
                    <>
                        <h2 className={styles.heading}>Create an account</h2>
                        <p className={styles.subheading}>
                            Already have an account?{' '}
                            <span
                                className={styles.link}
                                onClick={() => setIsSignup(false)}
                            >
                                Login
                            </span>
                        </p>
                        <form onSubmit={handleFormSubmit} className={styles.form}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                value={user.name}
                                onChange={handleInputChange}
                                className={styles.input}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={user.email}
                                onChange={handleInputChange}
                                className={styles.input}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                required
                                value={user.password}
                                onChange={handleInputChange}
                                className={styles.input}
                            />
                            <button type="submit" className={styles.button}>
                                SIGN UP
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className={styles.heading}>Login to your account</h2>
                        <p className={styles.subheading}>
                            Don't have an account?{' '}
                            <span
                                className={styles.link}
                                onClick={() => setIsSignup(true)}
                            >
                                Signup here!
                            </span>
                        </p>
                        <form onSubmit={handleFormSubmit} className={styles.form}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                autoComplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={styles.input}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.input}
                            />
                            <button type="submit" className={styles.button}>
                                SIGN IN
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
};
