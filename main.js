// Pide al usuario varias cadenas de texto.Cuando se pulse el botón de cancelar(del alert) tendrán que mostrarse en el navegador cada cadena de texto concatenada con un guion.
let button = document.querySelector("#button");
button.addEventListener("click", () => getStrings());
const getStrings = () => {
  let stringArray = [];
  let string = "";
  do {
    string = prompt("enter a string");
    stringArray.push(string);
  } while (confirm("continue?"));
  console.log(stringArray);
  concatStrings(stringArray);
};

const concatStrings = (stringArray) => {
  let finalString = "";
  stringArray.forEach((item, i, stringArray) => {
    finalString += item;
    if (stringArray[i + 1]) {
      finalString += "-";
    }
  });

  print(finalString);
};

const print = (stringToPrint) => {
  let container = document.querySelector("#container");
  let para = document.createElement("P");
  para.textContent = stringToPrint;
  container.append(para);
};
