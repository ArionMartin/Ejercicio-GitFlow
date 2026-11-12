const assert = require("assert");
const { calcularTotal, calcularPrecioFinal } = require("../src/descuentos");

assert.strictEqual(calcularTotal(100, 20), 80);
assert.strictEqual(calcularTotal(50, 0), 50);

assert.strictEqual(calcularPrecioFinal(100, "estudiante"), 85);
assert.strictEqual(calcularPrecioFinal(100, "normal"), 100);
assert.strictEqual(calcularPrecioFinal(0, "estudiante"), 0);
assert.strictEqual(calcularPrecioFinal(0, "normal"), 0);
assert.throws(() => calcularPrecioFinal(-100, "estudiante"), {
  name: "Error",
  message: "El precio no puede ser negativo",
});
assert.throws(() => calcularPrecioFinal(-100, "normal"), {
  name: "Error",
  message: "El precio no puede ser negativo",
});

console.log("Tests ejecutados correctamente");
