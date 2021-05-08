"use strict";

// place your code below


console.log(`Hello world!`);

// let licznik = 0;
// let linia = "";
// while (licznik <= 9) {
//     linia = linia + "#";
//     licznik ++;
//     console.log(linia);
// }

//     let linia = "";
// for (let i = 0; i <= 9; i = i + 1) {

//     linia = linia + "#"
// console.log(linia);
// }

let licznik = 4;
while (licznik == 4) {
  let wynik = prompt("Jaki jest wynik działania: 2+2?");
  if (wynik == 4) {

    alert("PERFEKCJA");
    break;
  } else {
    alert("CHUJÓWKA");
  }
}
