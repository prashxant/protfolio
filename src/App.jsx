import './App.css';
import Home from './landingPage/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Abt from './about/Abt'; 
import Project from './projects/project';
import Blog from './Blog/blog';

function App() {
  return (
    <div>
      <Router>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Abt />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
  