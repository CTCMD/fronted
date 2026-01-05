

function calcular() {
  const ingresos = document.getElementById("ingresos").value;
  const gastos = document.getElementById("gastos").value;

  document.getElementById("resultado").textContent =
    "Ingresos: " + ingresos + "\nGastos: " + gastos;
}
