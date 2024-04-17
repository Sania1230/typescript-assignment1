"use strict";
let PersonsName = "Sania Aftab";
let lowercaseName = PersonsName.toLowerCase();
console.log(lowercaseName);
let uppercaseName = PersonsName.toUpperCase();
console.log(uppercaseName);
let words = PersonsName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + "";
}
;
console.log(titlecaseName);
