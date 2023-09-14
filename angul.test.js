const assert = require('assert');

// Arrange
function generarAnguloFinal() {
  const angulo = Math.floor(Math.random() * (360 - 0)) + 0;
  const vueltas = Math.floor(Math.random() * (11 - 5)) + 5;
  const angu2 = Math.floor(Math.random() * (360 - 0)) + 0;

  // Act
  const num = angu2 * vueltas + angulo;
  const suma = num % 360;

  return suma;
}

// Act
const anguloFinal = generarAnguloFinal();

// Assert
console.log("Angulo final: ", anguloFinal);
assert.ok(anguloFinal >= 0 && anguloFinal < 360, 'El ángulo final está fuera del rango válido (0-359 grados)');
console.log("Prueba pasada exitosamente.");
