import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Layout/Navbar';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/profile' element={<Profile />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
