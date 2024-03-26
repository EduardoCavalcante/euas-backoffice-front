import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import InputMask from 'react-input-mask';
import { sendMessage } from '../../services/messageService';
import EmojiPicker from 'emoji-picker-react';
import './SendMessage.css';


function SendMessage() {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const onEmojiClick = (emojiData) => {
        setChosenEmoji(emojiData);
        setMessage(message + emojiData.emoji);
    };

    const toggleEmojiPicker = () => setShowEmojiPicker(!showEmojiPicker);

    const addFormat = (formatSymbol) => {
        setMessage(`${formatSymbol}${message}${formatSymbol}`);
    };

    const handleSubmit = async (event) => {
        console.log('...');
        event.preventDefault();
        const data = await sendMessage(number.replace(/\D+/g, ''), message);
        console.log(data);
    };

    return (
        <div className="send-message-container">
            <form onSubmit={handleSubmit} className="message-form">
                <label htmlFor="number">Número de Telefone</label>
                <InputMask
                    mask="+99 (99) 99999-9999"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="+00 (00) 00000-0000"
                    className="phone-input"
                />
                <div className="message-editor">
                    <div className="toolbar">
                        <button type="button" onClick={() => addFormat('*')}>Negrito</button>
                        <button type="button" onClick={() => addFormat('_')}>Itálico</button>
                        <button type="button" onClick={() => addFormat('~')}>Riscado</button>
                        <button type="button" onClick={toggleEmojiPicker}>😀</button>
                        {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
                    </div>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escreva sua mensagem aqui"
                        className="message-input"
                    />
                    <div className="preview">
                        <p>Preview:</p>
                        <div>{message}</div>
                    </div>
                </div>
                <button type="submit" className="send-button">Enviar Mensagem</button>
            </form>
        </div>
    );
}

export default SendMessage;