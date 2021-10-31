import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './LoginPage.css';

const LoginPage = () => {
    const { logInwithGoogle, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        logInwithGoogle()
        .then(result => {
            setUser(result.user);
            history.push(redirectUri);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    return (
        <div className="log-in-page">
            <div className="container">
                <div className="row fullscreen align-items-center">
                    <div className="col text-center text-white">
                        <h1 className="hero-h1 fst-italic playfair mb-5">Log in</h1>
                        <button onClick={handleGoogleLogIn} className="google-log-in">
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