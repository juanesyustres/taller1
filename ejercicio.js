// Clase padre
class Vehiculo {
  // Atributo privado
  #anio;

  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.setAño(anio); // usar setter
  }

  describir() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.#anio}`;
  }

  calcularAntiguedad() {
    return 2025 - this.#anio;
  }

  // Getter
  getAño() {
    return this.#anio;
  }

  // Setter
  setAño(valor) {
    if (valor >= 1900 && valor <= 2025) {
      this.#anio = valor;
    } else {
      throw new Error("Año invalido");
    }
  }
}

// Clase hija Moto
class Moto extends Vehiculo {
  constructor(marca, modelo, anio, cilindraje) {
    super(marca, modelo, anio);
    this.cilindraje = cilindraje;
  }

  esDeAltoCC() {
    return this.cilindraje > 500;
  }
}

// Clase hija Camion
class Camion extends Vehiculo {
  constructor(marca, modelo, anio, capacidadToneladas) {
    super(marca, modelo, anio);
    this.capacidadToneladas = capacidadToneladas;
  }

  puedeTransportar(peso) {
    return peso < this.capacidadToneladas;
  }
}

// Crear objetos
const moto1 = new Moto("Yamaha", "MT-07", 2022, 689);
const camion1 = new Camion("Volvo", "FH16", 2020, 20);

// Métodos heredados
console.log(moto1.describir());
console.log("Antigüedad:", moto1.calcularAntiguedad(), "años");

// Método nuevo de Moto
console.log("¿Es de alto cilindraje?", moto1.esDeAltoCC());

// Métodos heredados
console.log(camion1.describir());
console.log("Antigüedad:", camion1.calcularAntiguedad(), "años");

// Método nuevo de Camion
console.log("¿Puede transportar 15 toneladas?", camion1.puedeTransportar(15));
console.log("¿Puede transportar 25 toneladas?", camion1.puedeTransportar(25));

// Probar getter
console.log("Año de la moto:", moto1.getAño());

// Probar setter con valor válido
try {
  moto1.setAño(2024);
  console.log("Nuevo año:", moto1.getAño());
} catch (error) {
  console.log(error.message);
}

// Probar setter con valor inválido
try {
  moto1.setAño(1800);
} catch (error) {
  console.log("Error:", error.message);
}