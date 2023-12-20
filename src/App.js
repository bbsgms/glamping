import './App.css';
import { Home } from './pages/Home';
import { Domiki } from './pages/Domiki';
import Contact from './pages/Contact';
import { Error } from './pages/Error';
import InfoDomik from './pages/InfoDomik';
import Navbar from './components/Navbar'


import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/domiki" element={<Domiki />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/domiki/:info" element={<InfoDomik />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </div>
    
  );
}

export default App;
