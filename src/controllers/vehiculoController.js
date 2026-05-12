import { Moto } from '../models/Moto.js'
import { Camion } from '../models/Camion.js'

const vehiculos = []
const TIPOS_VALIDOS = ['moto', 'camion']

const normalizarTexto = texto => texto.toLowerCase()

const tieneMarca = marca => vehiculo => {
  return normalizarTexto(vehiculo.marca) === normalizarTexto(marca)
}

const crearVehiculo = datos => {
  const { marca, modelo, anio, tipo, cilindraje, capacidadToneladas } = datos

  if (tipo === 'moto') {
    return new Moto(marca, modelo, anio, cilindraje)
  }

  return new Camion(marca, modelo, anio, capacidadToneladas)
}

export const listar = (_req, res) => {
  res.json(vehiculos)
}

export const crear = (req, res) => {
  const { tipo } = req.body

  if (!TIPOS_VALIDOS.includes(tipo)) {
    return res.status(400).json({
      error: 'El tipo debe ser "moto" o "camion"'
    })
  }

  const nuevo = crearVehiculo(req.body)
  vehiculos.push(nuevo)

  res.status(201).json(nuevo)
}

export const buscarPorMarca = (req, res) => {
  const { marca } = req.params
  const resultado = vehiculos.filter(tieneMarca(marca))

  res.json(resultado)
}

export const eliminarPorMarca = (req, res) => {
  const { marca } = req.params
  const antes = vehiculos.length

  for (let i = vehiculos.length - 1; i >= 0; i--) {
    if (tieneMarca(marca)(vehiculos[i])) {
      vehiculos.splice(i, 1)
    }
  }

  res.json({ eliminados: antes - vehiculos.length })
}

export const estadisticas = (_req, res) => {
  const motos = vehiculos.filter(v => v instanceof Moto).length
  const camiones = vehiculos.filter(v => v instanceof Camion).length

  res.json({ total: vehiculos.length, motos, camiones })
}
