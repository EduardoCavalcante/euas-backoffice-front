import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useKeepAlive = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = () => {
            fetch('/api/auth/check')
                .then(response => response.json())
                .then(data => {
                    setIsAuthenticated(data.isAuthenticated);
                    if (data.isAuthenticated) {
                        navigate('/home');
                    } else {
                        navigate('/auth');
                    }
                })
                .catch(error => {
                    console.error('Error checking authentication:', error);
                    navigate('/auth');
                });
        };

        checkAuth();
        const interval = setInterval(checkAuth, 10000);

        return () => clearInterval(interval);
    }, [navigate]);

    return isAuthenticated;
};

export default useKeepAlive;
