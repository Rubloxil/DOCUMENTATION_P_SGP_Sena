import apiClient from './client'
import {
  mockStats,
  mockFichas,
  mockProyectosCriticos,
  mockEventos,
  mockActividad,
  mockInstructores,
  mockAprendices,
  mockProyectos,
  mockUsuarios,
  mockAlertas,
} from '../data/mockData'

// =========================================================================
// CÓMO CONECTAR CON TU API DE FASTAPI
// -------------------------------------------------------------------------
// Cada función abajo hoy "resuelve" con datos mock (mockData.js).
// Cuando tu endpoint en FastAPI esté listo, comenta la línea del mock
// y descomenta la línea de apiClient. Ejemplo para getFichas():
//
//   export async function getFichas() {
//     // return mockFichas
//     const { data } = await apiClient.get('/fichas')
//     return data
//   }
//
// Así no tienes que tocar ninguna página ni componente: todas consumen
// estas funciones, nunca el mock ni axios directamente.
// =========================================================================

export async function getDashboardStats() {
  // const { data } = await apiClient.get('/dashboard/stats')
  // return data
  return mockStats
}

export async function getFichas() {
  // const { data } = await apiClient.get('/fichas')
  // return data
  return mockFichas
}

export async function getFicha(id) {
  // const { data } = await apiClient.get(`/fichas/${id}`)
  // return data
  return mockFichas.find((f) => f.id === Number(id))
}

export async function getProyectosCriticos() {
  // const { data } = await apiClient.get('/proyectos/criticos')
  // return data
  return mockProyectosCriticos
}

export async function getProximosEventos() {
  // const { data } = await apiClient.get('/eventos/proximos')
  // return data
  return mockEventos
}

export async function getActividadReciente() {
  // const { data } = await apiClient.get('/actividad/reciente')
  // return data
  return mockActividad
}

export async function getInstructores() {
  // const { data } = await apiClient.get('/instructores')
  // return data
  return mockInstructores
}

export async function getAprendices() {
  // const { data } = await apiClient.get('/aprendices')
  // return data
  return mockAprendices
}

export async function getProyectos() {
  // const { data } = await apiClient.get('/proyectos')
  // return data
  return mockProyectos
}

export async function getUsuarios() {
  // const { data } = await apiClient.get('/usuarios')
  // return data
  return mockUsuarios
}

export async function getAlertas() {
  // const { data } = await apiClient.get('/alertas')
  // return data
  return mockAlertas
}

// Ejemplos de escritura (POST/PUT/DELETE), listos para cuando los necesites
export async function crearFicha(payload) {
  const { data } = await apiClient.post('/fichas', payload)
  return data
}

export async function actualizarFicha(id, payload) {
  const { data } = await apiClient.put(`/fichas/${id}`, payload)
  return data
}

export async function eliminarFicha(id) {
  const { data } = await apiClient.delete(`/fichas/${id}`)
  return data
}
