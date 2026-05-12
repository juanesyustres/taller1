import { Router } from 'express'
import {
  buscarPorMarca,
  crear,
  eliminarPorMarca,
  estadisticas,
  listar
} from '../controllers/vehiculoController.js'

const router = Router()

router.get('/vehiculos', listar)
router.post('/vehiculos', crear)
router.get('/vehiculos/estadisticas', estadisticas)
router.get('/vehiculos/marca/:marca', buscarPorMarca)
router.delete('/vehiculos/:marca', eliminarPorMarca)

export default router
