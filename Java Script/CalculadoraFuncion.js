function calculadora(n1, n2, operation) {
  if (operation === "suma") {
    return n1 + n2;
  } else if (operation === "resta") {
    return n1 - n2;
  } else if (operation === "multiplicador") {
    return n1 * n2;
  } else if (operation === "division") {
    return n1 / n2;
  } else {
    return "operationNotAdmited";
  }
}

console.log(calculadora(58, 60, "division"));
