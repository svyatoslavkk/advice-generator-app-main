import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import dividerMobile from './pattern-divider-mobile.svg';
import dividerDesktop from './pattern-divider-desktop.svg';
import iconButton from './icon-dice.svg';
import { Button } from './Components/Button';

function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        const adviceData = data.slip.advice
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className='container'>
      <div className='content-block'>
        <h1 className='title'>Advice #117</h1>
        <p className='advice-text'>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>
        <img className='divider-img mobile' src={dividerMobile} alt="Divider Image" />
        <img className='divider-img desktop' src={dividerDesktop} alt="Divider Image" />
        <Button>
          <img className='icon-button' src={iconButton} alt="Icon Button" />
        </Button>
      </div>
    </div>
  );
}

export default App;
