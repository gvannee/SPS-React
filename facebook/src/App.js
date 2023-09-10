
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Hompage/Home';
import Newsfeed from './views/Newsfeed/Newsfeed';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='app'>
      
      <div className='info'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newsfeed' element={<Newsfeed />} />
      </Routes>
      </div>
      
    </div>

  );
}

export default App;
