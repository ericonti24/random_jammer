import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Jammers = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Gary_Moore_2005.05.21_002-2.jpg/250px-Gary_Moore_2005.05.21_002-2.jpg", 
    "https://s1.ticketm.net/dam/a/d01/2d9bb752-5203-42b7-bc36-5d46b794ad01_RETINA_PORTRAIT_3_2.jpg", 
    "https://s3.amazonaws.com/allaboutjazz/photos/2010/duaneallmanat70_800.jpeg", 
    "https://cdn.houstonpublicmedia.org/wp-content/uploads/2019/08/15113811/Stevie-Ray-Vaughan-AP.jpg"
  ]

  const [jammer, setJammer] = useState(Jammers[0]);

  const getRandomJammer = () => {
    const randomIndex = Math.floor(Math.random() * Jammers.length);
    setJammer(Jammers[randomIndex]);
  }

  const test = () => {
    console.log(jammer);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={jammer} alt="logo" className="App-logo" />
        <p>
          Click Jam on! to change to a random jammer. 
        </p>
        <button onClick={getRandomJammer} className="App-link">
          Jam on!
        </button>
      </header>
    </div>
  );
}

export default App;
