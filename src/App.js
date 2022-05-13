
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home ';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div  className='max-w-7-xl mx-auto px-12' >
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='appointment' element={<Appointment></Appointment>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='signup' element={< SignUp/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
