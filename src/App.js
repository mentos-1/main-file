import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';


import Temp from './route/Temp';
import Resume from './route/Resume';
import Samples from './route/Samples'; 
import Home from './route/Home ';

import Resume1 from './component/Resume1';



function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/temp" element={<Temp/>} />
      <Route path="/resume1" element={<Resume1/>} />
      <Route path="/sample" element={<Samples/>} />

      
      
      
    </Routes>

  );


}


export default App;