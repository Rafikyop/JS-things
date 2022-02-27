let personName = "Carlosjorge";

let personSecondName = "Guillermo";

let personFirstLastName = "Mejia";

let personSecondLastName = "Soto";

let personNames = personName + " " + personSecondName;

let personLastNames = personFirstLastName + " " + personSecondLastName;

let FullName = personNames + " " + personLastNames;

let FullNameOverLoad = `${personName} ${personSecondName} ${personFirstLastName} ${personSecondLastName}`;

let namedCarlos = FullNameOverLoad.includes("jorge");

let nameMoreThan5 = personName.length > 5;

console.log(FullNameOverLoad, namedCarlos, nameMoreThan5);
