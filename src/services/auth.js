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
  })
  return response.data
}

const getUsers = async () => {
  const response = await api.get('/usuario')
  return response
}

const AuthServices = {
  login,
  register,
  getUsers
}

export default AuthServices