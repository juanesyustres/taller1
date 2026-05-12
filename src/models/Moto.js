import { Vehiculo } from './Vehiculo.js'

export class Moto extends Vehiculo {
  constructor(marca, modelo, anio, cilindraje) {
    super(marca, modelo, anio)
    this.cilindraje = cilindraje
    this.tipo = 'moto'
  }

  esDeAltoCC() {
    return this.cilindraje > 500
  }
}
