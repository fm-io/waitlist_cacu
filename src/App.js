import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Hero from "./components/Hero";
import WhyCacu from "./components/WhyCacu";
import WeCacu from './components/WeCacu';
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";

function App() {
  const [showPopup, setShowPopup] = useState(false);


  return (
    <div className="App">
      <Header onOpen={() => setShowPopup(true)}/>
      <Hero onOpen={() => setShowPopup(true)} />
      <WhyCacu />
      <WeCacu />
      <Footer />
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </div>

    
  );
}


export default App;