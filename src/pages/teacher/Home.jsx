import { Center, Spinner } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TeacherNavBar from '../../components/layout/navbar/teacher/TeacherNavBar';
import TeacherContext from '../../context/TeacherContext';
import Dashboard from './Dashboard';

const Home = () => {
  const teacherContext = useContext(TeacherContext);

  useEffect(() => {
    teacherContext.getDashboardInfo();
  }, []);

  return (
    <>
      <TeacherNavBar />
      {teacherContext.isLoading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      )}
    </>
  );
};

export default Home;
