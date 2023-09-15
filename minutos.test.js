const assert = require('assert');

// Arrange
function calcularHoraFinal() {
  const today = new Date();
  const now = today.getHours();
  const now2 = today.getMinutes();
  const rand = Math.floor(Math.random() * (600 - 300)) + 300;

  // Act
  let horafinal = Math.floor(rand / 60) + now;
  let minutosfinal = rand % 60 + now2;

  if (minutosfinal >= 60) {
    horafinal += 1;
    minutosfinal -= 60;
  }

  if (horafinal >= 24) {
    horafinal -= 24;
  }

  return `${horafinal}:${minutosfinal}`;
}

// Act
const horaFinal = calcularHoraFinal();

// Assert
const [horas, minutos] = horaFinal.split(':').map(Number);

assert.strictEqual(typeof horas, 'number');
assert.strictEqual(typeof minutos, 'number');
assert.ok(horas >= 0 && horas < 24, 'La hora final está fuera del rango válido (0-23 horas)');
assert.ok(minutos >= 0 && minutos < 60, 'Los minutos finales están fuera del rango válido (0-59 minutos)');

console.log("Hora final: ", horaFinal);
console.log("Prueba pasada exitosamente.");
