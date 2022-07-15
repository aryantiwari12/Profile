import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myaccounts from './component/Myaccounts';
import Profile from './component/Profile';
import Changepassword from './component/Changepassword';
import Notificationsetting from './component/Notificationsetting';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Myaccounts />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/changepassword" element={<Changepassword/>} />
          <Route path="/Notificationsetting" element={<Notificationsetting/>} />
          <Route path="/Myaccounts" element={<Myaccounts />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
