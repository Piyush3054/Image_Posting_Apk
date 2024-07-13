import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/profile';
import HandleProfile from './components/HandleProfile';
import HandlePost from './components/HandlePost';

function App() {
  return (
     <BrowserRouter>
       <div className='app'>
         <Routes>
           <Route path='/' element={<Register />} />
           <Route path='/login' element={<Login />} />
           <Route path='/profile' element={<Profile />} />
           <Route path='/home' element={<Home />} />
           <Route path="/handleProfile" element={<HandleProfile />}/>
           <Route path="/handlePost" element={<HandlePost />}/>
         </Routes> 
       </div>
     </BrowserRouter>
  );
}

export default App;
