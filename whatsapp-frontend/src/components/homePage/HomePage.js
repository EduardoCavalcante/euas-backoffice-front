// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold">WhatsApp Messaging</h1>
      <nav>
        <ul className="list-none p-0">
          <li><Link to="/send-message" className="text-blue-500 hover:text-blue-800">Envio Individual - Mensagem de Texto</Link></li>
          <li><Link to="/send-image" className="text-blue-500 hover:text-blue-800">Envio Individual - Imagem</Link></li>
          <li><Link to="/send-video" className="text-blue-500 hover:text-blue-800">Envio Individual - Vídeo</Link></li>
          <li><Link to="/send-audio" className="text-blue-500 hover:text-blue-800">Envio Individual - Áudio</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
