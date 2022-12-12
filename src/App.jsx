import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import Login from './pages/auth/Login';
import Dashboard from './pages/student/Dashboard';
import Settings from './pages/student/Settings';
import SignUp from './pages/auth/SignUp';
import Onboarding from './pages/student/Onboarding';
import { Spinner } from '@chakra-ui/react';
import PlacementTest from './pages/student/PlacementTest';
import Home from './pages/teacher/Home';

const App = () => {
  const authContext = useContext(AuthContext);

  if (!authContext.isLoading) {
    if (authContext.isStudent) {
      if (authContext.student.testCompletado) {
        return (
          <BrowserRouter>
            <Routes>
              <Route path='/examen-diagnostico' element={<PlacementTest />} />
              <Route path='/' element={<Onboarding />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
        );
      } else {
        return (
          <BrowserRouter>
            <Routes>
              <Route path='/ajustes' element={<Settings />} />
              <Route path='/*' element={<Dashboard />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
        );
      }
    } else if (authContext.isTeacher) {
      return (
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Home />} />
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
  } else {
    return <Spinner color='teal' />;
  }
};

export default App;
