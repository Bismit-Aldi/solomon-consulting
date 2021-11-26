import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
