import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from '../../components/layout/navbar/NavBar';
import Challenges from './Challenges';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Learn from './learn/Learn';
import LevelLection from './learn/LevelLection';
import Level from './learn/Level';
import LevelTest from './learn/LevelTest';
import ExtraResources from './learn/ExtraResources';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aprende' element={<Learn />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/retos' element={<Challenges />} />
        <Route path='aprende/niveles/:level' element={<Level />} />
        <Route
          path='aprende/niveles/:level/lecciones'
          element={<LevelLection />}
        />
        <Route
          path='aprende/niveles/:level/lecciones/recursos-extra'
          element={<ExtraResources />}
        />
        <Route path='aprende/niveles/:level/examen' element={<LevelTest />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default Dashboard;
