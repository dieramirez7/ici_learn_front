import api from '../utils/api';

const getDashboardInfo = async () => {
  const response = await api.get('/profesor/dashboard', {
    headers: {
      'auth-token': localStorage.getItem('token'),
    },
  });
  return response.data;
};

const TeacherService = {
  getDashboardInfo,
};

export default TeacherService;
