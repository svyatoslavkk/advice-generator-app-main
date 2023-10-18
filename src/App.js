import logo from './logo.svg';
import './App.scss';
import dividerMobile from './pattern-divider-mobile.svg';
import dividerDesktop from './pattern-divider-desktop.svg';
import iconButton from './icon-dice.svg';

function App() {
  return (
    <div className='container'>
      <div className='content-block'>
        <h1 className='title'>Advice #117</h1>
        <p className='advice-text'>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>
        <img className='divider-img' src={dividerMobile} alt="Divider Image" />
        {/* <img className='divider-img' src={dividerDesktop} alt="Divider Image" /> */}
        <div className='button-block'>
          <img className='icon-button' src={iconButton} alt="Icon Button" />
        </div>
      </div>
    </div>
  );
}

export default App;
