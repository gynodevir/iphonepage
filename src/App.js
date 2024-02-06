import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { MobileSection } from './components/MobileSection';
import { HeroSection } from './components/HeroSection';
import {Container} from "@mui/material"
import { Contactus } from './components/Contactus';

function App() {
  return (
    <div className="App">
 
      <NavBar />
      <Container>
        <HeroSection />
      <MobileSection />
      <Contactus />
      </Container>
  
    </div>
  );
}

export default App;
