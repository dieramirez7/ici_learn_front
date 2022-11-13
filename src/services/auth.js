import api from "../utils/api"

export const login = async (email, password) => {
  const response = await api.post('/usuario/login', {email, password})
  return response
}

export const getUsers = async () => {
  const response = await api.get('/usuario')
  return response
}
