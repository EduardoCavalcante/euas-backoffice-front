import api from './api';

const sendMessage = async (number, message) => {
    const response = await api.post('/messages/send-text', { number, message });
    return response.data;
};

const sendImage = async (formData) => {
    const response = await api.post('/messages/send-image', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};

// Exporte as funções que você precisa
export { sendMessage, sendImage };
