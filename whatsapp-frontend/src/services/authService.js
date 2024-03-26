import api from './api';

const getQRCode = async () => {
    const response = await api.get('/auth/get-qr-code');
    const data = await response.data;
    return data;
};

export { getQRCode };
