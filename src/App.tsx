import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/login'/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  );
}

export default App;
