import api from "../utils/api"

const login = async (email, password) => {
  const response = await api.post('/usuario/login', {email, password})
  return response.data
}

const register = async (user) => {
  const response = await api.post('/usuario', {
    nombre: user.name,
    apellidos: user.lastName,
    email: user.email,
    password: user.password,
  },)
  return response.data
}

const getUser = async (id)=>{
  const response = await api.get(`/usuario/${id}`, {
    headers: {
      'auth-token': localStorage.getItem('token')
    }
  })
  return response.data
}


const AuthServices = {
  login,
  register,
  getUser,
}

export default AuthServices