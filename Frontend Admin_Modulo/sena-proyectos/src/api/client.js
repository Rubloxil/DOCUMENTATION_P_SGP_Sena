import axios from 'axios'

// 👉 Cuando tengas el backend de FastAPI corriendo, solo cambia esta URL
// (o crea un archivo .env con VITE_API_URL=http://localhost:8000)
export const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Si tu API usa JWT, descomenta esto para inyectar el token automáticamente
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')
//   if (token) config.headers.Authorization = `Bearer ${token}`
//   return config
// })

export default apiClient
