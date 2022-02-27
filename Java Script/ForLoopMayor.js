let array = [1, 100, 200, 10, 54, 87, 652, 32];
let maxnumber = 0;
for (let index = 0; index < array.length; index++) {
  if (array[index] > maxnumber) {
    maxnumber = array[index];
  }
}
console.log(maxnumber);
