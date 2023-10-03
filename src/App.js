import React, { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { IoMdOpen } from 'react-icons/io';
import { RiSendPlaneFill } from 'react-icons/ri';
import "./App.css"
import bot from "../src/img/chatbot2.gif"
const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [messagesVisible, setMessagesVisible] = useState(true);
  useEffect(() => {
    const initialMessage = "Vous êtes les bienvenus chez le chatbot de Samiha pour plus d'informations sur elle.";
    setMessages([{ text: initialMessage, user: false }]);
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const lowercaseInput = input.toLowerCase();
    let response = '';

    if (lowercaseInput.includes('bonsoir')||lowercaseInput.includes('bonjour')||lowercaseInput.includes('bjr')||lowercaseInput.includes('hi')||lowercaseInput.includes('salut') ||lowercaseInput.includes('cc')) {
      response = "Bonjour! Comment puis-je vous aider?";
    } else  if (lowercaseInput.includes('nom') || lowercaseInput.includes('prenom')) {
      response = "Mon nom c'est <b> ELHAJJAM Samiha</b>";
    } else if (lowercaseInput.includes('formation') || lowercaseInput.includes('projet') || lowercaseInput.includes('experience') || lowercaseInput.includes('etude')) {
      response = "Tous se trouvent dans mon portfolio, consultez le sur le lien suivant:<a href='http://www.portfolioSamihaElhajjam.com' target='_blank'><b></br> www.portfolioSamihaElhajjam.com </b></a>";
    } else if (lowercaseInput.includes('portfolio')|| lowercaseInput.includes('lien')) {
      response = "<a href='http://www.portfolioSamihaElhajjam.com' target='_blank'>www.portfolioSamihaElhajjam.com</a>";
    }  else if (lowercaseInput.includes('linkedin')) {
      response = "<a href='https://www.linkedin.com/in/samiha-elhajjam/' target='_blank'>https://www.linkedin.com/in/samiha-elhajjam/</a>";
    } else if (lowercaseInput.includes('cv') || lowercaseInput.includes('cirriculum vitae') || lowercaseInput.includes('cirriculum ') || lowercaseInput.includes('cirriculum ')) {
      response = "Voilà le lien de mon CV: </br><b><a href='https://drive.google.com/file/d/11_315CZYN-VX2fa9Mg45jTQLPDtomhF4/view?usp=drive_link' target='_blank'>Cliquez sur le lien pour accéder au CV dans le drive.</a></b>";
    } else if (lowercaseInput.includes('github') ) {
      response = "<a href='https://github.com/SAMIHA88' target='_blank'>https://github.com/SAMIHA88</a>";
    } else if (lowercaseInput.includes('email') || lowercaseInput.includes('gmail') || lowercaseInput.includes('mail')) {
      response = '<a href="mailto:samihaelhajjam2001@gmail.com">samihaelhajjam2001@gmail.com</a>';
    } else if (lowercaseInput.includes('num') || lowercaseInput.includes('telephone') ||lowercaseInput.includes('numero') || lowercaseInput.includes('tele') || lowercaseInput.includes('whatsapp')) {
      response = ' <a href="tel:+212604392001">+212 604 392 001</a>';
    } else {
      response = "Désolé, en tant que chatBot, je ne peux répondre qu'à certaines questions.";
    }

    setMessages([
      ...messages,
      { text: input, user: true },
      { html: response, user: false }
    ]);

    setInput('');
  };
   useEffect(() => {
    const initialMessage = "Vous êtes les bienvenus chez le chatbot de Samiha pour plus d'informations sur elle.";
    setMessages([{ text: initialMessage, user: false }]);
  }, []);


  return (
    <div className={`chatbot ${messagesVisible ? '' : 'collapsed'}`}>
      
      <div className="chatbot__header">
        <img
          src={bot}
          alt="Chatbot Logo"
          className="chatbot__logo"
        />
        <h2 className="chatbot__title"></h2>
        
      </div>
      <div className="chatbot__messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'user' : 'bot'}`}>
            {message.html ? (
              <div dangerouslySetInnerHTML={{ __html: message.html }} />
            ) : (
              message.text
            )}
          </div>
        ))}
      </div>
      <div className="chatbot__input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Posez une question..."
        />
        <button onClick={handleSendMessage}><RiSendPlaneFill /></button>
      </div>
    </div>
  );
};

export default App;
