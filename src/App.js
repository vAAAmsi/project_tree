
import Dashboard from './dashboard';
import './App.css';
import NavBar from './nav';
import ViewTree from './frame1';
import AddTree from './frame2';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './pages/login';
import ForgotPasswordPage from './pages/forgetpassword'
import NewPassword from './components/templates/Auth/NewPassword/NewPassword';


function App() {
  return (
  <div>
      {/* <NavBar/> */}
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route> 
      <Route path='/login' element={<LoginPage/>}></Route> 
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/view' element={<ViewTree/>} > </Route>
      <Route path='/addtree' element={<AddTree/>} > </Route>
      <Route path='/forgotpassword'   element={<ForgotPasswordPage/>} ></Route>
      <Route path='/newpassword'   element={<NewPassword/>} ></Route>
    </Routes>
  </div>
      // <div>
        
      //  <NavBar></NavBar>
      //  {/* <ViewTree/> */}
      // {/* <Dashboard></Dashboard> */}
      // <AddTree/>
      // </div>
       
      
    
  );
}

export default App;
