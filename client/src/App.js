import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
