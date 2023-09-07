
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Hompage/Home';
import Newsfeed from './views/Newsfeed/Newsfeed';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newsfeed' element={<Newsfeed />} />
    </Routes>
  );
}

export default App;
