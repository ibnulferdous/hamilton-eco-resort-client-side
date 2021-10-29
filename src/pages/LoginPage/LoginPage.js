import React from 'react';
import useAuth from '../../hooks/useAuth';
import './LoginPage.css';

const LoginPage = () => {
    const { logInwithGoogle, user, setUser } = useAuth();

    return (
        <div className="log-in-page">
            <div className="container">
                <div className="row fullscreen align-items-center">
                    <div className="col text-center text-white">
                        <h1 className="hero-h1 fst-italic playfair mb-5">Log in</h1>
                        <button onClick={logInwithGoogle} className="google-log-in">
                            <i className="fab fa-google me-3"></i>
                            <span>Log in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;