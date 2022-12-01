import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import Login from './pages/auth/Login';
import Dashboard from './pages/home/Dashboard';
import Settings from './pages/home/Settings';
import SignUp from './pages/auth/SignUp';
import Onboarding from './pages/home/Onboarding';
import { Spinner } from '@chakra-ui/react';
import PlacementTest from './pages/home/PlacementTest';

const App = () => {
  const authContext = useContext(AuthContext);

  if (!authContext.isLoading) {
    if (authContext.isLoggedIn) {
      if (!authContext.user.testCompletado) {
        return (
          <BrowserRouter>
            <Routes>
              <Route path='/placement-test' element={<PlacementTest />} />
              {/* <Route path='' */}
              <Route path='/' element={<Onboarding />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
        );
      } else {
        return (
          <BrowserRouter>
            <Routes>
              <Route path='/settings' element={<Settings />} />
              <Route path='/*' element={<Dashboard />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
        );
      }
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
  } else {
    return <Spinner color='teal' />;
  }
};

export default App;
