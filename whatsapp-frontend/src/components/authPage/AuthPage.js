import React, { useEffect, useState } from 'react';
import { getQRCode } from '../../services/authService';
import styles from './AuthPage.module.css';
import { useNavigate } from 'react-router-dom';



function AuthPage() {
    const [qrCode, setQrCode] = useState('');

    useEffect(() => {
        getQRCode().then(data => {
            if (data.success) {
                setQrCode(data.qrCode);
            }
        });
    }, []);

    return (
        <div className={styles.container}>
          <h1>Scan QR Code to Authenticate</h1>
          {qrCode && <img src={qrCode} alt="QR Code" className={styles.qrCode} />}
        </div>
      );
}

export default AuthPage;
