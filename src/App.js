// import components 
import Nav from './components/Nav';

import Main from './components/Main';

import Footer from './components/Footer';

import { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState(0)
  const [contactSubject, setContactSubject] = useState('Dont Know What I Need')

  return (
    <div className="App">
      <Nav 
      setLocation={setLocation}
      location ={location}
      />
      <Main
      contactSubject={contactSubject}
      setContactSubject={setContactSubject}
      setLocation={setLocation} 
      location={location}
      />
      <Footer 
      />
    </div>
  );
}

export default App;
