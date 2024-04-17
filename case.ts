let PersonsName: string = "Sania Aftab";

 let lowercaseName: string  = PersonsName.toLowerCase()
console.log(lowercaseName);

let uppercaseName: string  = PersonsName.toUpperCase()
console.log(uppercaseName);

let words: string[] = PersonsName.split(" ");
 
let titlecaseName: string = ""

for (let i = 0 ; i < words.length; i++)
    {
        titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+""

    };
    console.log(titlecaseName)