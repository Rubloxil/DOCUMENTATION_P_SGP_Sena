# SENA Proyectos · Frontend

Frontend en React + Vite + Tailwind, con el mismo estilo visual del dashboard
("SENA Proyectos") y rutas ya configuradas para todas las secciones del menú.
Hoy consume **datos de ejemplo** (mock); está listo para conectarse a tu API
de FastAPI sin tener que tocar las páginas.

## 1. Instalar dependencias

```bash
npm install
```

## 2. Correr en desarrollo

```bash
npm run dev
```

Abre http://localhost:5173

## 3. Conectar con tu API de FastAPI

1. Copia `.env.example` a `.env` y pon la URL de tu API:

   ```
   VITE_API_URL=http://localhost:8000
   ```

2. Abre `src/api/services.js`. Cada función tiene comentada la línea real
   con `apiClient` y, debajo, la línea que devuelve el mock. Por ejemplo:

   ```js
   export async function getFichas() {
     // return mockFichas
     const { data } = await apiClient.get('/fichas')
     return data
   }
   ```

   Comenta el mock, descomenta la llamada a `apiClient`, y listo: la página
   de Fichas (o cualquier otra) empezará a mostrar datos reales sin más
   cambios.

3. Si tu API usa autenticación con JWT, hay un interceptor ya preparado
   (comentado) en `src/api/client.js` para inyectar el token automáticamente.

## Estructura del proyecto

```
src/
  api/         -> cliente axios y funciones que llaman a la API
  data/        -> datos mock (mientras no conectas el backend)
  components/  -> Sidebar, Topbar, Badge, StatCard, Card, PageHeader
  layouts/     -> AdminLayout (sidebar + topbar + contenido)
  pages/       -> una página por cada ruta del menú
  App.jsx      -> definición de rutas
```

## Rutas disponibles

| Ruta                | Página            |
| -------------------- | ----------------- |
| `/`                  | Inicio             |
| `/fichas`            | Fichas             |
| `/proyectos`         | Proyectos          |
| `/instructores`      | Instructores       |
| `/aprendices`        | Aprendices         |
| `/reportes`          | Reportes           |
| `/alertas`           | Alertas            |
| `/usuarios`          | Usuarios           |
| `/mensajes`          | Mensajes           |
| `/configuracion`     | Configuración      |
| `/vista-aprendiz`    | Vista Aprendiz     |
| `/vista-instructor`  | Vista Instructor   |
