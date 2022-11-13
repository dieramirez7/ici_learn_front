import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import Login from './pages/auth/Login';
import Dashboard from './pages/home/Dashboard';
import Settings from './pages/home/Settings';
import SignUp from './pages/auth/SignUp';

const App = () => {
  const authContext = useContext(AuthContext);

  if (authContext.isLoggedIn) {
    return (
      // <SignUp />
      <BrowserRouter>
        <Routes>
          <Route path='/settings' element={<Settings />} />
          <Route path='/*' element={<Dashboard />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
