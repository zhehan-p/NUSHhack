import { useState } from 'react';
import { auth, googleProvider } from 'config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import '../styles/auth.css'

const firebaseConfig = {
    apiKey: `${process.env.API_KEY}`,
    authDomain: "nushhack-bd3ba.firebaseapp.com",
    projectId: "nushhack-bd3ba",
    storageBucket: "nushhack-bd3ba.firebasestorage.app",
    messagingSenderId: "776117645348",
    appId: "1:776117645348:web:9976df6f68e5e6b793a8b1",
    measurementId: "G-KN9FMB51Q9"
  };

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (e) {
            console.error(e);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Authentication</h2>

            <div style={styles.inputContainer}>
                <input
                    style={styles.input}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    style={styles.input}
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={signInWithGoogle}>Sign In with Google</button>
                <button style={styles.button} onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

// Basic styles for layout and appearance
