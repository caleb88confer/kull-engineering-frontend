// import components 
import Nav from './components/Nav';

import Main from './components/Main';

import Footer from './components/Footer';

import { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState(0)

  return (
    <div className="App">
      <Nav 
      setLocation={setLocation}
      />
      <Main 
      location={location}
      />
      <Footer />
    </div>
  );
}

export default App;
