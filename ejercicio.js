class Vehiculo {
  // Constructor
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  // Método para describir el vehículo
  describir() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`;
  }

  // Método para calcular antigüedad
  calcularAntiguedad() {
    return 2025 - this.anio;
  }
}

// Crear instancias
const v1 = new Vehiculo("Toyota", "Corolla", 2018);
const v2 = new Vehiculo("Honda", "Civic", 2015);

// Mostrar resultados
console.log(v1.describir());
console.log("Antigüedad:", v1.calcularAntiguedad(), "años");

console.log(v2.describir());
console.log("Antigüedad:", v2.calcularAntiguedad(), "años");