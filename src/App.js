import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Items from './components/Items';
import YouTubeGallery from './components/YouTubeGallery';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  
  <Navbar/>
 
 
  
  
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/items" element={<Items/>} />
    <Route path="/youtube" element={<YouTubeGallery/>} />
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
