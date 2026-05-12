import { Vehiculo } from './src/models/Vehiculo.js'
import { Moto } from './src/models/Moto.js'
import { Camion } from './src/models/Camion.js'

const vehiculo = new Vehiculo('Toyota', 'Corolla', 2021)
const moto = new Moto('Yamaha', 'MT-07', 2022, 689)
const camion = new Camion('Volvo', 'FH16', 2020, 20)

console.log(vehiculo.describir())
console.log('Antiguedad:', vehiculo.calcularAntiguedad(), 'anios')

console.log(moto.describir())
console.log('Antiguedad:', moto.calcularAntiguedad(), 'anios')
console.log('Es de alto cilindraje:', moto.esDeAltoCC())

console.log(camion.describir())
console.log('Antiguedad:', camion.calcularAntiguedad(), 'anios')
console.log('Puede transportar 15 toneladas:', camion.puedeTransportar(15))
console.log('Puede transportar 25 toneladas:', camion.puedeTransportar(25))
