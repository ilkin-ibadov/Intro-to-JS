// Variable növləri

// var scope-dan asılı olaraq limitlənmədiyi üçün istifadəsi tövsiyyə olunmur.
var globalVariable = "Hər yerdən oxuna bilir";
var globalVariable = "Duplikat variable-lar yaratmaq mümkündür";

// console.log(globalVariable)

let functionScopeVariable = "Yazıldığı function-dan kənarda oxuna bilmir";
// let functionScopeVariable = "Ikinci dəfə yazıldıqda error verir";

// const sonradan yeni value assign edilməsi mümkün olmayan variable növüdür.
const message = "Javascript";

// Bunu etməyə çalışsaq xəta verəcək
// message = 'C++'

/* var və let başlanğıcda boş value ola bilər,
 const-da boş value-dan istifadə error verir.
*/
var emptyVar;
let emptyLet;

// console.log-dan adətən debugging və müxtəlif value-ları oxumaq üçün istifadə olunur
console.log(message);

// Data tipləri - Primitive tiplər
let bool = true; // Boolean: true və ya false ola bilir
let num = 3; // Number: integer və ya floating-point number ola bilir
let float = 3.14; // Number: floating-point number
let str = "JavaScript"; // String: Dırnaq içərisində yazılmış character-lərdən ibarət ardıcıllıq
let n = null; // Null: Qəsdən value-su olmayan variable-lara assign olunur
let u = undefined; // Undefined: Initialize olunmamış variable-ın sahib olduğu default value

// Arithmetic operations
let sum = num + 5; // Addition (Toplama)
let difference = num - 1; // Subtraction (Çıxma)
let product = num * 2; // Multiplication (Vurma)
let quotient = num / 2; // Division (Bölmə)
let remainder = num % 2; // Remainder (Qalıqlı bölmə)

// function checkEvenOrOdd(num) {
//     if (num % 2 === 0) {
//         return num + " is even.";
//     } else {
//         return num + " is odd.";
//     }
// }
// console.log(checkEvenOrOdd(5))

// Arithmetic operation nəticələri
// console.log("Sum:", sum);
// console.log("Difference:", difference);
// console.log("Product:", product);
// console.log("Quotient:", quotient);
// console.log("Remainder:", remainder);
// console.log("5 is bigger than 3:", 5 > 3);
// console.log("1 is smaller than 3:", 1 < 3);

// ------------------------------------------------------------------------------------

// "Special" types (Object-lər, Array-lar, Function-lar)

// Object-lər key-value cütlüklərindən ibarət xüsusi data tipidir.
const obj = {
  key: "Value",
};

// Object key-lərinin dəyəri hər hansı bir primitive type ola bilər
// const obj = {
//   key: "String value",
//   key2: ["Array value"],
//   key3: { objKey: "Object value" },
// };

/* Array (massivlər) birdən çox value-nu özündə saxlaya bilən xüsusi data növüdür,
burada hər bir dəyər indekslə müəyyən edilir.
*/
const arr = ["item 1", "item 2"];

// console.log(arr[0]);

// Function declaration
function greet(name) {
  return "Salam, " + name + "!";
}

// Function expression
const sayHi = (name) => {
  console.log("Salam, " + name + "!");
};

// Funksiyanın qaytardığı dəyəri variable-a assign etmək
let greeting = greet("Ilkin");

// console.log(greeting);

// Və ya birbaşa function call etmək
// sayHi("Ilkin");


// -------------------------------------------------------------

// const testDiv = document.getElementById('testDiv')

// console.log(testDiv)
