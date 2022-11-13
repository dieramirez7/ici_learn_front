import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from '../../components/layout/navbar/NavBar';
import Challenges from './Challenges';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Learn from './Learn';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/challenges' element={<Challenges />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default Dashboard;
