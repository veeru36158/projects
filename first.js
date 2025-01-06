// FUNCIONS

// let nameV= prompt("enter a name");
// function myfunction(msg){
//     console.log (msg);
// }
// myfunction(nameV);

// function sum(a,b){
//     let c=a + b;
//     console.log(c);
// }
// sum(2,3);

// // Arrow function

// const sumFunction = (a,b)=>{
//     product= a*b;
//     return product;
// }
// console.log(sumFunction);

// Function to check number of vowels is a sentence

// let sentence= prompt("Enter a sentence");
// function countVowels(str){
//     let count=0;
//     for (const char of str) {
//         if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'||char==='A'||char==='E'||char==='I'||char==='O'||char==='U'){
//             count++;
//         }
//     }
//     return count;
// }
// let answer=countVowels(sentence);
// console.log(answer);

// Arrow Function to count number of vowels**************************************

// let sentence= prompt("Enter a sentence");
// const vowelsCount= (sentence)=>{
//     let count=0;
//     for (const char of sentence) {
//         if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'||char==='A'||char==='E'||char==='I'||char==='O'||char==='U'){
//             count++;
//         }
//     }
//     console.log(count);
// }

// CALLBACK functions  ************************
// Print Square of each value of an Array using FOREACH method ****************************
// FOREACH 
// let num= [1,2,3,4,5];
// num.forEach(val=>{
// let numSq= val*val;
// console.log(numSq);
// })

// Another Method 
// let num= [56,63,99,12,15];
// const square= (val)=>{
//     let numSq= val*val;
//     console.log(numSq);
//     }
// num.forEach(square);

// MAP METHOD 

// filter method..................................................................
// Even numbers in array
// let arr =[1,3,5,7,8];
// let newArr= arr.filter((val) => {
//     if(val%2==0){
//         return val;
//     }

// })
// console.log(newArr);

let sentence= prompt("Enter a Sentence");
