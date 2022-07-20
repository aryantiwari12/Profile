import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myaccounts from './component/Myaccounts';
import Profile from './component/Profile';
import Changepassword from './component/Changepassword';
import Notificationsetting from './component/Notificationsetting';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Home from './component/Home';
import Mobile from './component/Mobile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<Mobile />} />
          {/* <Route path="/" element={<Signin />} /> */}
          <Route path="/Myaccounts" element={<Myaccounts />} />
          {/* <Route path="/" element={<Myaccounts />} /> */}
          <Route path="/Profile" element={<Profile />} />
          <Route path="/changepassword" element={<Changepassword/>} />
          <Route path="/Notificationsetting" element={<Notificationsetting/>} />
          {/* <Route path="/Myaccounts" element={<Myaccounts />} /> */}
          <Route path="/Signup" element={<Signup/>} />
          <Route path='/Signin' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
