
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home ';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div  className='max-w-7-xl mx-auto px-12' >
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='appointment' element={
      <RequireAuth>
        <Appointment></Appointment>
      </RequireAuth>
      }></Route>
      <Route path='dashboard' element={
      <RequireAuth>
        <Dashboard/>
      </RequireAuth>
      }>
        <Route index element ={<MyAppointment></MyAppointment>}></Route>
        <Route path='reviwe' element ={<MyReview></MyReview>}></Route>
        <Route path='Myhistory' element={<MyHistory></MyHistory>}></Route>
        <Route path='users' element={<Users></Users>}></Route>
      </Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='signup' element={< SignUp/>}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
