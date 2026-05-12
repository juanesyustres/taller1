import { Vehiculo } from './Vehiculo.js'

export class Camion extends Vehiculo {
  constructor(marca, modelo, anio, capacidadToneladas) {
    super(marca, modelo, anio)
    this.capacidadToneladas = capacidadToneladas
    this.tipo = 'camion'
  }

  puedeTransportar(peso) {
    return peso < this.capacidadToneladas
  }
}
