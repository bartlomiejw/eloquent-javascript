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

// let licznik = 4;
// while (licznik == 4) {
//   let wynik = prompt("Jaki jest wynik działania: 2+2?");
//   if (wynik == 4) {

//     alert("PERFEKCJA");
//     break;
//   } else {
//     alert("ŹLE");
//   }
// }

// ex 3.1

function absolute($number) {
    if ($number >= 0) {
        console.log($number);
    } else {
        console.log(-$number);
    }
}

// absolute(-103);

// example

// function findSequence(goal) {
//   function find(start, history) {
//     if (start == goal) return history;
//     else if (start > goal) return null;
//     else
//       return (
//         find(start + 5, "(" + history + " + 5)") ||
//         find(start * 3, "(" + history + " * 3)")
//       );
//   }
//   return find(1, "1");
// }

// console.log(findSequence(22));

// ex 3.2

// function greatherThan(number) {
//     return function(number2) {
//         return number2 > number;
//     };
// }

// let greater = greatherThan(10);
// console.log(greater(9));

// ex 4.1

// let names = {
//   nicks: [
//       "Spot",
//   ]
// };

// names.nicks[1] = "Daddy Cool";
// names.nicks[2] = "Roman";
// delete names.nicks[2];

// console.log(names.nicks);




// console.log(mailArchive);

// for (let current = 0; current in mailArchive; current++) {
//     console.log(mailArchive[current])
// }

// ex. 4.2

// function range(number) {
//     let arr = [];
//     for (let current = 0; current <= number; current++) {
//       arr[current] = current;
//     }
//     return arr.join(" < ");
// }

// console.log(range(12));

// ex 4.3

// let string = ["Polska","to","kraj"];


// console.log(string.join(" ").split(" s"));

// let arr = ["Polska", "to", "kraj D"];

// console.log(arr.join(" ").split(" "));

// ex 4.4

// function startWith(string1, string2) {
//     if (string1.charAt(0) == string2.charAt(0)) {
//         console.log('prawda');
//     } else {
//         console.log('fałsz')
//     }
// }

// startWith("To moja wina", "So Twoja wina");

// function startWith2(string1, string2) {
//   if (string1.slice(0, 2) == string2.slice(0, 2)) {
//     console.log("prawda");
//   } else {
//     console.log("fałsz");
//   }
// }

// startWith2("To moja wina", "To moja wina");

function startsWith(string1, string2) {
  return string1.slice(0, string2.length) == string2;
}

// console.log(
//   startsWith(
//     " urodzeni 04.05.2006 (matka Lady Penelope): Testarosa, Ruben Diaz 3, Marko Claudio",
//     " urodzeni"
//   )
// );

// ex 4.5

function catNames(paragraph) {
    let splitPlace = paragraph.indexOf(':');
    let catNamesString = paragraph.slice(splitPlace + 2);
    let catNames = catNamesString.split(',');

    return catNames;
}
//   catNames("urodzeni 20/09/2004 (matka Yellow Bess): Doctor Hobbles 2, Noog");

// MAILE KOTY

function addToSet(set, values) {
    for (let i = 0; i < values.length; i++) {
        set[values[i]] = true;
    }
    return set;
}

function removeFromSet(set, values) {
    for (let i = 0; i < values.length; i++) {
        delete set[values[i]];
    }
    return set;
}

function extractDate(paragraph) {
  let colon = paragraph.indexOf(":");
  let openBracket = paragraph.indexOf("(");
  let closeBracket = paragraph.indexOf(")");

  if (closeBracket > 0){
       var date = paragraph.slice(colon - 32, openBracket - 1);
  }
  else {
      var date = paragraph.slice(colon - 10, colon);
  }
  let fullDate = date.split('.');
  let dataObj = new Date(fullDate[2], fullDate[1] - 1, fullDate[0]);

  console.log(fullDate);
  console.log(dataObj);
}

function findLivingCats(data) {
    let livingCats = { Spot: true };

    for (let mail = 0; mail < data.length; mail++) {
      let paragraphs = data[mail].split("/n");
      for (let paragraph = 0; paragraph < paragraphs.length; paragraph++) {
        if (startsWith(paragraphs[paragraph], " urodzeni")) {
          extractDate(paragraphs[paragraph]);
          addToSet(livingCats, catNames(paragraphs[paragraph]));
        } else if (startsWith(paragraphs[paragraph], " odeszli")) {
          extractDate(paragraphs[paragraph]);
          removeFromSet(livingCats, catNames(paragraphs[paragraph]));
        }
      }
    }

    return livingCats;
}

let mailArchive = [
  "Drogi siostrzeńcu, /n" +
    "Twoja matka powiedziała mi, że zacząłeś wykonywać akrobacje ze spadochronem. Czy to prawda? Uważaj na siebie, młody człowieku! Pamiętasz, co się przytrafiło mojemu mężowi? A to było tylko drugie piętro!  /n " +
    "A tak w ogóle, u mnie sporo się dzieje. Cały tydzień próbowałam zwrócić na siebie uwagę Pana Kowalskiego, tego miłego jegomościa, który wprowadził się do mieszkania obok, ale wydaje mi się, że on nie lubi kotów. A może ma na nie alergię? Następnym razem, gdy się z nim spotkam położę mu na ramieniu Grubego Igora, ciekawe co zrobi.  /n " +
    "A jeśli chodzi o ten przekręt, o którym pisałam wcześniej, to wszystko idzie, jak po maśle. Otrzymałam już pięć „zapłat” i tylko jedną skargę. Ale zaczyna mnie dręczyć sumienie. Pewnie masz rację, że to może być nielegalne.  /n " +
    "Całuję, Ciocia Emilia  /n " +
    "odeszli 04.04.2021: Black Leclère  /n " +
    "urodzeni 04.05.2021 (matka Lady Penelope): Red Lion, Doctor Hobbles 3, Little Iroquois ",

  "Drogi siostrzeńcu, /n " +
    "Twoja matka powiedziała mi, że zacząłeś wykonywać akrobacje ze spadochronem. Czy to prawda? Uważaj na siebie, młody człowieku! Pamiętasz, co się przytrafiło mojemu mężowi? A to było tylko drugie piętro!  /n " +
    "A tak w ogóle, u mnie sporo się dzieje. Cały tydzień próbowałam zwrócić na siebie uwagę Pana Kowalskiego, tego miłego jegomościa, który wprowadził się do mieszkania obok, ale wydaje mi się, że on nie lubi kotów. A może ma na nie alergię? Następnym razem, gdy się z nim spotkam położę mu na ramieniu Grubego Igora, ciekawe co zrobi.  /n " +
    "A jeśli chodzi o ten przekręt, o którym pisałam wcześniej, to wszystko idzie, jak po maśle. Otrzymałam już pięć „zapłat” i tylko jedną skargę. Ale zaczyna mnie dręczyć sumienie. Pewnie masz rację, że to może być nielegalne.  /n " +
    "Całuję, Ciocia Emilia  /n " +
    "odeszli 04.03.2021: Ferrari /n " +
    "urodzeni 04.05.2021 (matka Lady Penelope): Testarosa, Ruben Diaz 3, Marko Claudio ",
];


console.log(findLivingCats(mailArchive));

// for (let cat in livingCats)
// console.log(cat);

var now = new Date(1995, 11, 17);
console.log(now);