import api from '../utils/api';

const loginStudent = async (email, password) => {
  const response = await api.post('/usuario/login', { email, password });
  return response.data;
};

const loginTeacher = async (email, password) => {
  const response = await api.post('/profesor/login', { email, password });
  return response.data;
};

const register = async (user) => {
  const response = await api.post('/usuario', {
    nombre: user.name,
    apellidos: user.lastName,
    email: user.email,
    password: user.password,
  });
  return response.data;
};

const getStudent = async (id) => {
  const response = await api.get(`/usuario/${id}`, {
    headers: {
      'auth-token': localStorage.getItem('token'),
    },
  });
  return response.data;
};

const getTeacher = async (id) => {
  const response = await api.get(`/profesor/${id}`, {
    headers: {
      'auth-token': localStorage.getItem('token'),
    },
  });
  return response.data;
};

const AuthServices = {
  loginStudent,
  loginTeacher,
  register,
  getStudent,
  getTeacher,
};

export default AuthServices;
