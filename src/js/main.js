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

// ex. 4.2 i 4.10

function range(number, sec) {
  if (arguments.length >= 2) {
    let arr = [];
    for (let current = number; current <= sec; current++) {
      arr.push(current);
    }
    return arr;
  } else {
    let arr = [];
    for (let current = 0; current <= number; current++) {
      arr.push(current);
    }
    return arr;
  }
}

console.log(range(3, 5));

// ex 4.11

function sum(arr) {
  var suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

console.log(sum(range(3, 5)));

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
  let splitPlace = paragraph.indexOf(":");
  let catNamesString = paragraph.slice(splitPlace + 2);
  let catNames = catNamesString.split(",");

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

function formatDate(number) {
  if (!(number >= 10)) {
    return "0" + number;
  } else {
    return number;
  }
}

function extractDate(paragraph) {
  let colon = paragraph.indexOf(":");
  let openBracket = paragraph.indexOf("(");
  let closeBracket = paragraph.indexOf(")");

  if (closeBracket > 0) {
    var date = paragraph.slice(colon - 32, openBracket - 1);
  } else {
    var date = paragraph.slice(colon - 10, colon);
  }
  let fullDate = date.split(".");
  let dateObj = new Date(fullDate[2], fullDate[1] - 1, fullDate[0]);
  var month = formatDate(dateObj.getUTCMonth() + 1);
  var day = formatDate(dateObj.getUTCDate() + 1);
  let year = dateObj.getUTCFullYear();

  let newDate = day + "." + month + "." + year;

  return newDate;
  // console.log(fullDate);
  // console.log(dataObj);
}

function catRecord(name, birthdate, deathdate, mother) {
  return { name: name, birth: birthdate, death: deathdate, mother: mother };
}

function addCats(set, names, birthdate, mother) {
  for (var i = 0; i < names.length; i++)
    set[names[i]] = catRecord(names[i], birthdate, "nieznany", mother);
}
function deadCats(set, names, deathdate) {
  for (var i = 0; i < names.length; i++)
    set[names[i]] = catRecord(names[i], "nieznany", deathdate, "nieznany");
}

function extractMother(paragraph) {
  var start = paragraph.indexOf("(matka ") + "(matka ".length;
  var end = paragraph.indexOf(")");
  return paragraph.slice(start, end);
}

// ex 4.7

function between(paragraph, start, end) {
  var startAt = paragraph.indexOf(start) + start.length;
  var endAt = paragraph.indexOf(end, startAt);
  return paragraph.slice(startAt, endAt);
}

function findLivingCats(data) {
  let livingCats = {
    Spot: catRecord("Spot", "02.05.2957", "nieznany", "nieznany"),
  };
  for (let mail = 0; mail < data.length; mail++) {
    let paragraphs = data[mail].split("/n");
    for (let paragraph = 0; paragraph < paragraphs.length; paragraph++) {
      if (startsWith(paragraphs[paragraph], " urodzeni")) {
        addCats(
          livingCats,
          catNames(paragraphs[paragraph]),
          extractDate(paragraphs[paragraph]),
          between(paragraphs[paragraph], "(matka ", ")")
        );
      } else if (startsWith(paragraphs[paragraph], " odeszli")) {
        deadCats(
          livingCats,
          catNames(paragraphs[paragraph]),
          extractDate(paragraphs[paragraph])
        );
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
    "odeszli 14.04.2021: Black Leclère  /n " +
    "urodzeni 04.08.1965 (matka Lady Penelope): Red Lion, Doctor Hobbles 3, Little Iroquois ",

  "Drogi siostrzeńcu, /n " +
    "Twoja matka powiedziała mi, że zacząłeś wykonywać akrobacje ze spadochronem. Czy to prawda? Uważaj na siebie, młody człowieku! Pamiętasz, co się przytrafiło mojemu mężowi? A to było tylko drugie piętro!  /n " +
    "A tak w ogóle, u mnie sporo się dzieje. Cały tydzień próbowałam zwrócić na siebie uwagę Pana Kowalskiego, tego miłego jegomościa, który wprowadził się do mieszkania obok, ale wydaje mi się, że on nie lubi kotów. A może ma na nie alergię? Następnym razem, gdy się z nim spotkam położę mu na ramieniu Grubego Igora, ciekawe co zrobi.  /n " +
    "A jeśli chodzi o ten przekręt, o którym pisałam wcześniej, to wszystko idzie, jak po maśle. Otrzymałam już pięć „zapłat” i tylko jedną skargę. Ale zaczyna mnie dręczyć sumienie. Pewnie masz rację, że to może być nielegalne.  /n " +
    "Całuję, Ciocia Emilia  /n " +
    "odeszli 14.03.2021: Ferrari /n " +
    "urodzeni 24.05.2021 (matka Lady Penelope): Testarosa, Ruben Diaz 3, Marko Claudio ",
];

console.log(findLivingCats(mailArchive));
let catData = findLivingCats(mailArchive);

// for (let cat in livingCats)
// console.log(cat);

// var now = new Date(1995, 11, 17);
// console.log(now);

function catInfo(data, name) {
  if (!(name in data))
    return "Kot o imieniu " + name + " nie jest znany światu.";

  var cat = data[name];
  var message = name + ", urodzony " + cat.birth + " z matki  " + cat.mother;
  if ("death" in cat) message += ", zdechł dnia " + cat.death;
  return message + ".";
}

console.log(catInfo(catData, "Ferrari "));

// 4.9

function oldestCat(data) {
  let oldest = null;
  for (let name in data) {
    if (!(data[name].birth == "nieznany")) {
      let cat = data[name];
      let arrDate = cat.birth.split(".");
      cat.birth = new Date(arrDate[2], cat.birth[1], cat.birth[0]);
      // console.log(cat);
      if (oldest == null || oldest.birth > cat.birth) {
        oldest = cat;
      }
    }
  }
  if (oldest == null) return null;
  else return oldest.name;
}

console.log(oldestCat(catData));

function argumentCount() {
  console.log(arguments.length);
}

argumentCount("test", "test2", "nic");

function forEach(array, action) {
  for (var i = 0; i < array.length; i++) action(array[i]);
}

console.log("<----- NOWE ----->");

function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

function add(a, b) {
  return a + b;
}

function sum(numbers) {
  console.log(reduce(add, 0, numbers));
}

sum([4, 4]);

// 6.1

// 4,20,12,10,22,34, 0, 130, 100

function countZeroes(array) {
  function counter(total, element) {
    return total + (element === 0 ? 1 : 0);
  }
  console.log(reduce(counter, 0, array));
}

countZeroes([4, 0, 20, 12, 10, 0, 0]);

function count(test, array) {
  return reduce(
    function (total, element) {
      return total + (test(element) ? 1 : 0);
    },
    0,
    array
  );
}

function equals(x) {
  return function (element) {
    return x === element;
  };
}

function countZeroes(array) {
  return count(equals(0), array);
}

// ex 6.2

var recluseFile = `% Księga programowania

%% Dwa aspekty

Pod powłoką maszyny tętni życie programu. Bez żadnego wysiłku program rozszerza się i kurczy. Elektrony harmonicznie rozpraszają się i grupują. Formy powstające na ekranie monitora są niczym zmarszczki na powierzchni wody. Esencja pozostaje niezauważalna poniżej.

Konstruktorzy maszyny umieścili w niej procesor i pamięć. To z nich powstały dwa aspekty programu.

Aspekt procesora jest substancją aktywną. Nazywa się Kontrolą. Aspekt pamięci jest substancją pasywną. Nazywa się
Danymi.

Dane, mimo że składają się jedynie z bitów, mogą przyjmować niezwykle skomplikowane formy. Kontrola składa się tylko z prostych instrukcji, a mimo to może wykonywać trudne zadania. Małe i banalne byty dają początek rzeczom wielkim i skomplikowanym.

Źródłem programu są Dane. Daje on początek istnieniu Kontroli. Kontrola może tworzyć nowe Dane. Jedne rodzą się z innych, inne są bezużyteczne bez poprzednich. Jest to harmonijny cykl Danych i Kontroli.

Same w sobie Dane i Kontrola nie mają struktury. Z tej surowej substancji dawni programiści wyrzeźbili swoje programy. Z czasem z bezkształtnej masy wyłoniły się typy danych i chaotyczna Kontrola została ograniczona do roli struktur sterujących i funkcji.

%% Aforyzmy

Gdy uczeń zapytał Fu-Tzu o naturę cyklu Danych i Kontroli, Fu-Tzu odparł: „Pomyśl o kompilatorze, który sam siebie kompiluje”.

Uczeń zapytał: „Dawni programiści używali tylko prostych maszyn i nie znali języków programowania, a mimo to tworzyli piękne programy. Dlaczego my używamy skomplikowanych maszyn i języków programowania?”. Fu-Tzu odparł: „Dawni budowniczowie używali tylko patyków i gliny, a mimo to budowali piękne chaty”.

Pustelnik spędził dziesięć lat na pisaniu programu. Gdy skończył, z dumą ogłosił: „Mój program potrafi obliczyć ruch gwiazd na komputerze o architekturze 286 z systemem MS DOS”. „Dziś nikt już nie ma, ani nie używa komputerów o architekturze 286 z systemem MS DOS” odparł Fu-Tzu.

Fu-Tzu napisał niewielki program pełen globalnych stanów i wątpliwych skrótów. Uczeń czytając ten kod spytał: „Ostrzegałeś nas przed tego typu technikami, a sam je stosujesz. Dlaczego”? Fu-Tzu odparł: „Nie ma sensu biec po węże strażackie, kiedy dom się nie pali” {nie ma to być zachętą do stosowania złych praktyk programistycznych, a jedynie ostrzeżeniem przed fanatycznym trzymaniem się podstawowych zasad}.

%% Mądrość

Uczeń skarżył się na wyniki obliczeń cyfrowych. „Gdy obliczę pierwiastek z dwóch, a potem podniosę to do potęgi, wynik jest niedokładny”! Fu-Tzu, który go przypadkiem usłyszał, roześmiał się. „Oto kawałek papieru. Napisz na nim dokładną wartość pierwiastka z dwóch”.

Fu-Tzu rzekł: „Aby przeciąć pestkę, trzeba użyć dużej siły. Aby programem rozwiązać sedno problemu, trzeba napisać dużo kodu”.

Tzu-li i Tzu-ssu chwalili się rozmiarem swoich najnowszych programów. „Dwieście tysięcy wierszy kodu”, powiedział Tzu-li, „nie licząc komentarzy”! Tzu-ssu odrzekł: „Phi, mój ma prawie *milion* wierszy kodu”. Fu-Tzu słysząc to, odparł: „Mój najlepszy program zawiera pięćset wierszy kodu”. Tzu-li i Tzu-ssu słysząc te słowa doznali olśnienia.

Uczeń siedział w bezruchu przed swoim komputerem przez kilka godzin i tylko groźnie spoglądał. Próbował napisać piękne rozwiązanie trudnego problemu, ale nic dobrego nie przychodziło mu do głowy. Fu-Tzu trzasnął go w tył głowy i krzyknął: „*Napiszże coś!*”. Student zaczął pisać szpetne rozwiązanie. Gdy skończył, nagle pojął, jak napisać piękne rozwiązanie.

%% Postęp

Początkujący programista pisze programy tak, jak mrówka buduje swój kopiec, kawałek po kawałku bez zważania na ogólną strukturę. Jego programy są, jak luźne ziarnka piasku. Przez jakiś czas utrzymają się w całości, ale gdy za bardzo urosną, rozlecą się{odniesienie do wewnętrznej niespójności i duplikacji struktury w źle zorganizowanym kodzie.}.

Gdy zda sobie sprawę z problemu, programista zacznie o wiele więcej czasu poświęcać na projektowanie struktury. Jego programy będą ściśle zbudowane, jak skalne rzeźby. Będą solidne, ale gdy będzie trzeba w nich coś zmienić, konieczne będzie zastosowanie brutalnych metod{Odniesienie do faktu, że struktura może ograniczać ewolucję programu.}.

Mistrz programowania wie, kiedy zastosować strukturę, a kiedy pozostawić proste rozwiązania. Jego programy są jak glina, zwarte ale i plastyczne.

%% Język

W trakcie powstawania każdy język programowania otrzymuje składnię i semantykę. Składnia opisuje formę programu, semantyka zaś opisuje jego funkcję. Gdy składnia jest piękna, a semantyka klarowna, program będzie dostojny, jak pień potężnego drzewa. Gdy składnia jest niezgrabna, a semantyka niejasna, program jest jak krzak jeżyny.

Tzu-ssu poproszono o napisanie programu w języku o nazwie Java, w którym funkcje są bardzo prymitywne. Każdego ranka zasiadając przed komputerem Tzu-ssu od razu zaczynał narzekać. Całymi dniami przeklinał i obwiniał język za wszystkie swoje niepowodzenia. Fu-Tzu przez pewien czas go słuchał, aż w końcu rzucił: „Każdy język ma swoje właściwości. Postępuj zgodnie z jego zasadami, zamiast próbować pisać tak, jakbyś używał innego języka”.`;

let paragraphs = recluseFile.split("\n\n");

console.log("<--------- ZADANIE 6,2 ZOBACZ --------->");
console.log(paragraphs);

function processParagraph(paragraph) {
  console.log(
    reduce(
      function (total, element) {
        return total + (element.startsWith("%") ? 1 : 0);
      },
      0,
      paragraph
    )
  );

  function contentSave(content, type) {
    return { content: content, type: type };
  }

  var header = 0;
  while (paragraph.charAt(0) == "%") {
    paragraph = paragraph.slice(1);
    console.log(paragraph);
    header++;
    console.log(header);
  }

  console.log({ type: header == 0 ? "p" : "h" + header, content: paragraph });
}

processParagraph(paragraphs[6]);

// ex. 6.3

function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

function splitParagraph(text) {
  function indexOrEnd(character) {
    var index = text.indexOf(character);
    return index == -1 ? text.length : index;
  }

  function takeNormal() {
    var end = reduce(Math.min, text.length, map(indexOrEnd, ["*", "{"]));
    var part = text.slice(0, end);
    text = text.slice(end);

    return part;
  }

  function takeUpTo(character) {
    var end = text.indexOf(character, 1);
    if (end == -1) throw new Error("Brak zamykającego '" + character + "'");
    var part = text.slice(1, end);
    text = text.slice(end + 1);
    return part;
  }

  var fragments = [];

  while (text != "") {
    if (text.charAt(0) == "*")
      fragments.push({ type: "emphasised", content: takeUpTo("*") });
    else if (text.charAt(0) == "{")
      fragments.push({ type: "footnote", content: takeUpTo("}") });
    else fragments.push({ type: "normal", content: takeNormal() });
  }
  return fragments;
}

// var par = map(processParagraph, recluseFile.split("\n\n"));

console.log(splitParagraph(paragraphs[17]));

console.log(splitParagraph(paragraphs[17]));

console.log(splitParagraph(paragraphs[17]));

var fragments = [];

while (text != "") {
  if (text.charAt(0) == "*")
    fragments.push({ type: "emphasised", content: takeUpTo("*") });
  else if (text.charAt(0) == "{")
    fragments.push({ type: "footnote", content: takeUpTo("}") });
  else fragments.push({ type: "normal", content: takeNormal() });
}
return fragments;
}

var test = '';

console.log(splitParagraph(paragraphs[17]));

console.log(splitParagraph(paragraphs[17]));

function takeUpTo(character) {
  var end = text.indexOf(character, 1);
  if (end == -1) throw new Error("Brak zamykającego '" + character + "'");
  var part = text.slice(1, end);
  text = text.slice(end + 1);
  return part;
}