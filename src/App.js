
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import ResNav from './Pages/Sheared/ResNav';

import MainApoointmant from './Pages/Appointment/MainApoointmant';
import Login from './Pages/Register/Login';
import Singup from './Pages/Register/Singup';
import RequreAuth from './Pages/ReauarAuth/RequreAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashbord/Dashboard';
import MyAppointment from './Pages/Dashbord/MyAppointment';
import MyReview from './Pages/Dashbord/MyReview';
import AllUser from './Pages/Dashbord/AllUser';


function App() {
  return (
    <div className=''>
 <ResNav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/appointment' element={
        <RequreAuth>
          <MainApoointmant/>
        </RequreAuth>
      }></Route>
      <Route path='/dashboard' element={
        <RequreAuth>
          <Dashboard/>
        </RequreAuth>
      }>
        <Route index element={<MyAppointment/>}></Route>
        <Route path='review' element={<MyReview/>}></Route>
        <Route path='users' element={<AllUser/>}></Route>
      </Route>


      <Route path='/login' element={<Login/>}></Route>
      <Route path='/singup' element={<Singup/>}></Route>

     </Routes>
     <ToastContainer 
     position="top-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="colored"
     />
    </div>
  );
}

export default App;
