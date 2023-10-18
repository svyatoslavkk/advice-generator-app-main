import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import dividerMobile from './pattern-divider-mobile.svg';
import dividerDesktop from './pattern-divider-desktop.svg';
import iconButton from './icon-dice.svg';
import { Button } from './Components/Button';
import LoadingIcon from './Components/LoadingIcon';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceCount, setAdviceCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAdvice = () => {
    setIsLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        const adviceData = data.slip.advice;
        setAdvice(adviceData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setAdviceCount(-1);
    fetchAdvice();
  }, []);

  useEffect(() => {
    setAdviceCount((prevCount) => prevCount + 1);
  }, [advice]);

  return (
    <div className='container'>
      <div className='content-block'>
        <h1 className='title'>Advice #{adviceCount}</h1>
        {isLoading ? (
          <LoadingIcon /> 
        ) : (
          <p className='advice-text'>{`"${advice}"`}</p>
        )}
        <img className='divider-img mobile' src={dividerMobile} alt="Divider Image" />
        <img className='divider-img desktop' src={dividerDesktop} alt="Divider Image" />
        <Button onClick={fetchAdvice}>
          <img className='icon-button' src={iconButton} alt="Icon Button" />
        </Button>
      </div>
    </div>
  );
}

export default App;
