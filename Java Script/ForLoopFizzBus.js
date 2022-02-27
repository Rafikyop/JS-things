for (let index = 1; index <= 100; index++) {
  let aux = "";
  if (index % 3 === 0) {
    aux = aux + "fizz";
  }
  if (index % 5 === 0) {
    aux = aux + "bus";
  }
  console.log(index, aux);
}
