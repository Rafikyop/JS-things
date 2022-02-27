let personHermanos = ["MariaJoseMejia", "JuanLuisMejia"];

let numeroDeHermanos = personHermanos.length;

let hermanoFavorito = personHermanos[1];

let nuevosHermanos = personHermanos.map((hermano) => hermano + "Soto");

let numeroLetrasHermano = personHermanos.map((hermano) => hermano.length);

let encontrarJose = personHermanos.find((hermano) => hermano.includes("Jose"));

console.log(
  personHermanos,
  numeroDeHermanos,
  hermanoFavorito,
  nuevosHermanos,
  numeroLetrasHermano,
  encontrarJose
);
