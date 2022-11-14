import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TextTyping from './pages/TextAnimations/TextTyping_1/TextTyping';
import TextFlashing from './pages/TextAnimations/TextFalashing/TextFlashing';
import TextTyping2 from './pages/TextAnimations/TextTyping_2/TextTyping2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/textTyping" element={<TextTyping />} />
        <Route path="/typing2" element={<TextTyping2 />} />
        <Route path="/animate2" element={<TextFlashing />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
