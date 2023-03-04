
import React from 'react';

import Home from './screens/Home';
import Login from './screens/Login';
import { Routes,Route, BrowserRouter} from 'react-router-dom';
import Signup from './screens/Signup';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/createuser' element={<Signup/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
