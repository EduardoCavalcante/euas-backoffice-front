import React from 'react';
import useKeepAlive from './hoocks/useKeepAlive';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './components/authPage/AuthPage';
import HomePage from './components/homePage/HomePage';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/privateRoute/PrivateRoute';
// import SendImage from './components/SendImage';
// import SendVideo from './components/SendVideo';
// import SendAudio from './components/SendAudio';

function App() {
    useKeepAlive();
  return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/" element={<Navigate replace to="/auth" />} />
                <Route
                    path="/home"
                    element={<PrivateRoute component={HomePage} />}
                />
                {/* Defina outras rotas privadas conforme necessário */}
            </Routes>
        </AuthProvider>
    </Router>
);
}

export default App;
