import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import One from './test/One';
import Three from './test/Three';
import Two from './test/Two';
import Four from './test/Four';
import Five from './test/Five';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/login'/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/one' element={<One/>}/>
      <Route path='/two' element={<Two/>}/>
      <Route path='/three' element={<Three/>}/>
      <Route path='/four' element={<Four/>}/>
      <Route path='/five' element={<Five/>}/>
    </Routes>
  );
}

export default App;
