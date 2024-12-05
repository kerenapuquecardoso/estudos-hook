import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>  
          </li>
          <li>
            <Link to="/about">About</Link>  
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' elemen={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
