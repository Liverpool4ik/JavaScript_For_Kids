// let showCats = function (howManyCats) {
// 	for (let i = 0; i < howManyCats; i++) {
// 		document.write(" =^.^=");
// 	}
// };

// showCats(20);

// let score = 11;
// score += 11;
// document.write(score);

// // document.write("<br>");

// // let score1 = 11;
// // score1 -= 11;
// // document.write(score1);

// let baloons = 100;
// baloons /= 4;
// document.write(baloons);

/*
// 1) first method ===>> First Symbol ==>> to UpperCase, all other symbols ==>> to lowerCase!!
let wrongString = "йО-хО-хО и бУтылка роМА";
console.log(wrongString + " ==>> (БЫЛО)");

let wrongWordCaseString = "йО-хО-хО и бУтылка роМА"; // created new variable
let stringifyToLowerCase = wrongWordCaseString.toLowerCase(); // all text ==> to lowercase
console.log(stringifyToLowerCase + " ==>> (to lowerCase)");

let firstLetter = stringifyToLowerCase[0]; // has taken First symbol of our variable
let firstLetterToUpperCase = firstLetter.toUpperCase(); // First symbol ==> to UPPERCASE
console.log(
	firstLetterToUpperCase + " ==>> ([0]first index letter ==> to UpperCase)"
);

let restOfString = wrongWordCaseString.slice(1); // cut all symbols from the FIRST Index up to the END
let restOfStringToLowerCase = restOfString.toLowerCase(); // changing all cutted symbols from [1] index ==>> into lowerCase mode
console.log(
	restOfStringToLowerCase + " ==>> (ВЫРЕЗАЛИ ВСЕ СИМВОЛЫ НАЧИНАЯ С ИНДЕКСА [1])"
);

let wrightString = firstLetterToUpperCase + restOfStringToLowerCase; // concatinating two variables (first letter UpperCased && other .slice lowerCased symbols [1 ==>> end] )
console.log(wrightString + " ==>> (all text ==>> to UpperCase)");

*/

//================
/*
// 2) second method --- BETTER MOVES ===>> First Symbol ==>> to UpperCase, all other symbols ==>> to lowerCase!!
let wrongCase = "втОРАя БутыЛКА РомААА, уже не до Йо-Хо-хО!!)) ";
console.log(wrongCase + " ==>> (БЫЛО)");

let wrongWordCaseStringBetterMoves =
	"втОРАя БутыЛКА РомААА, уже не до Йо-Хо-хО!!)) "; // created new variable

let doneStingBetterMoves =
	wrongWordCaseStringBetterMoves[0].toUpperCase() +
	wrongWordCaseStringBetterMoves.slice(1).toLowerCase();

console.log(doneStingBetterMoves + " ==>> (СТАЛО - by help of NEW MOVES)");
*/

let age = 11;

let accompanied = true;

let minimumAge = 12;

let enterZone = minimumAge + withAdultToGo;
