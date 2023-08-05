import Dashboard from './components/frames/dashboard/dashboard';
import ViewTree from './components/frames/frame1/frame1';
import AddTree from './components/frames/frame2/frame2';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './pages/login';
import ForgotPasswordPage from './pages/forgetpassword'
import NewPassword from './components/templates/Auth/NewPassword/NewPassword';


function App() {
  return (
  <div>
   
    <Routes>
      <Route path='/' element={<LoginPage     />}></Route> 
      <Route path='/login' element={<LoginPage/>}></Route> 
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/view' element={<ViewTree/>} > </Route>
      <Route path='/addtree' element={<AddTree/>} > </Route>
      <Route path='/forgotpassword'   element={<ForgotPasswordPage/>} ></Route>
      <Route path='/newpassword'   element={<NewPassword/>} ></Route>
    </Routes>
  </div>
 
  );
}

export default App;
