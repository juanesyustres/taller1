const ANIO_MINIMO = 1900
const ANIO_ACTUAL = 2025

export class Vehiculo {
  #anio

  constructor(marca, modelo, anio) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
  }

  get anio() {
    return this.#anio
  }

  set anio(valor) {
    if (valor < ANIO_MINIMO || valor > ANIO_ACTUAL) {
      throw new Error(`Anio invalido: debe estar entre ${ANIO_MINIMO} y ${ANIO_ACTUAL}`)
    }

    this.#anio = valor
  }

  describir() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Anio: ${this.#anio}`
  }

  calcularAntiguedad() {
    return ANIO_ACTUAL - this.#anio
  }
}
