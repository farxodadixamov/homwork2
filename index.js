"use strict"
// 1-misol

// function scramble(str, arr) {
//     return arr.map((index, i) => str[index]).join('');
// }

// console.log(scramble('abcd', [0,3,1,2])); 

// 2-misol
// function decodeMessage(sticker, comment) {
//     const decodedLetters = [];
    
//     for (let i = 0; i < sticker.length; i++) {
//         const index = sticker.indexOf(i.toString());
//         if (index === -1) {
//             return "Bugun missiya yo'q";
//         }
//         decodedLetters.push(comment.charAt(index));
//     }
    
//     return decodedLetters.join('').toLowerCase();
// }


// const sticker = [5, 0, 3];
// const comment = "Men seni sevaman";


// const decodedMessage = decodeMessage(sticker, comment);
// console.log(decodedMessage); 


// 3-misol

// function convertArray(strArray) {
//     const numArray = strArray.map(Number);
//     return numArray;
// }


// const strArray = ["1", "2", "3"];
// const numArray = convertArray(strArray);
// console.log(numArray); 


// 4-misol

// function scrollingText(text) {
//     const result = [];
//     const upperText = text.toUpperCase();

//     for (let i = 0; i < text.length; i++) {
//         const rotatedText = upperText.substring(i) + upperText.substring(0, i);
//         result.push(rotatedText);
//     }

//     return result;
// }


// const text = "codewars";
// const result = scrollingText(text);
// console.log(result);



// 5-misol

// function firstValue(arr) {
//     arr.sort();
    
    
//     const firstString = arr[0];
    
    
//     const modifiedString = firstString.split('').join('***');
    
//     return modifiedString;
// }


// const strings = ["hello", "world", "apple", "banana"];
// const result = firstValue(strings);
// console.log(result);



// 6-misol

// function satrniMassivgaAylantir(satr) {
//     return satr.split(" ");
// }


// let misol1 = "Robin Singh";
// let misol2 = "Men massivlarni yaxshi ko'raman, ular mening sevimlilarim";

// let natija1 = satrniMassivgaAylantir(misol1);
// let natija2 = satrniMassivgaAylantir(misol2);

// console.log(natija1);
// console.log(natija2);


// 7-misol

// function ajratilganBelgilarniTop(satr) {
//     if (satr.trim() === "" || satr.indexOf(",") === -1) {
//         return null;
//     }

//     let belgilar = satr.split(",");
//     let natija = [];

//     for (let i = 1; i < belgilar.length - 1; i++) {
//         natija.push(belgilar[i]);
//     }

//     return natija.join(" ");
// }


// let misol1 = "1,2,3";
// let misol2 = "1,2,3,4";
// let misol3 = "1,2,3,4,5";
// let misol4 = "";
// let misol5 = "1";
// let misol6 = "1,2";

// console.log(ajratilganBelgilarniTop(misol1)); 
// console.log(ajratilganBelgilarniTop(misol2)); 
// console.log(ajratilganBelgilarniTop(misol3)); 
// console.log(ajratilganBelgilarniTop(misol4)); 
// console.log(ajratilganBelgilarniTop(misol5)); 
// console.log(ajratilganBelgilarniTop(misol6)); 


// 8-misol

// function tekshirish(massiv, qiymat) {
//     return massiv.includes(qiymat);
//   }
  
  
//   let massiv1 = [1, 2, 3, 4, 5];
//   let massiv2 = ["apple", "banana", "orange"];
//   let qiymat1 = 3;
//   let qiymat2 = "banana";
  
//   console.log(tekshirish(massiv1, qiymat1)); 
//   console.log(tekshirish(massiv1, qiymat2)); 
//   console.log(tekshirish(massiv2, qiymat1));
//   console.log(tekshirish(massiv2, qiymat2));
  

