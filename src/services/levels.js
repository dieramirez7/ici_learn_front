import api from '../utils/api';

const getLevels = async () => {
  const response = await api.get(`/niveles`, {
    headers: {
      'auth-token': localStorage.getItem('token'),
    },
  });
  return response.data;
};

const getLevel = async (level) => {
  const response = await api.get(`/nivel/${level}`, {
    headers: {
      'auth-token': localStorage.getItem('token'),
    },
  });
  return response.data;
};

const levelUp = async () => {
  const response = await api.put(
    '/usuario/levelup',
    {},
    {
      headers: {
        'auth-token': localStorage.getItem('token'),
      },
    }
  );
  return response.data;
};

const LevelsService = {
  getLevels,
  getLevel,
  levelUp,
};

export default LevelsService;
