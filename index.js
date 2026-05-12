import express from 'express'
import vehiculosRouter from './src/routes/vehiculos.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/', vehiculosRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
