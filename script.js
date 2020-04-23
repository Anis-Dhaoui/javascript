// var message = "in global";
// console.log("global: message = " + message);

// var a = function () {
//     var message = "inside a";
//     console.log("a: message = " +message);
//     b();
// }
// function b() {
//     console.log("b: message = " +message);
// }
// a();



// var string = "Hello";
// string += " World";
// console.log(string + "!");

// var x = 4; 
// var y = 4;
// if (x == y){
//     console.log(`Yeah X=${x} is equal to Y=${y}`)
// }
// // Strict Equal
// x ="4";
// if(x === y){
//     console.log("Hell Yeah");
// }
// else{
//     console.log("Hell Noo");
// }

// if (false || NaN || "" || 0 || undefined || null){
//     console.log("This line won't be executed");
// }
// else{
//     console.log("All False")
// }

// if(true && "hello" && 1 && " " && -1){
//     console.log("All True")
// }

// function orderChickenWith(sideDish = "whatever") {
//     // if(sideDish == undefined){
//     //     sideDish = "Whatever"
//     // }
//     // **** OR ****

//     // sideDish = sideDish || "Whatever";

//     console.log("Chicken with " + sideDish);
// }
// orderChickenWith("noodles");
// orderChickenWith();

// var company = new Object();

// company.name = "HHM";
// company.description = "Law Firm";
// console.log(company);

// company.ceo = new Object();
// company.ceo.name = "Hamlin";
// company.ceo["last Name"] = "Brian";
// console.log(company.ceo);
// console.log(company.ceo.name);
// console.log(company.ceo["last Name"]);
// company.ceo["last Name"] = "Arthur";
// console.log(company.ceo);
// console.log(company.ceo["last Name"]);

// var company = {
//     name: "Facebook",
//     ceo:{
//         firstName: "Mark",
//         "Last Name": "Zuckerburg",
//     },
//     stock: 110
// };
// console.log(company);

// function multiply (x, y) {
//     return x * y;
// }
// console.log(multiply(5, 2));
// multiply.version = "1.0.2.5";
// console.log(multiply.version);


//function factory
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    };
    return myFunc;
}
console.log(makeMultiplier(2))
var multiplyBy2 = makeMultiplier(2);
console.log(multiplyBy2(5));
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

// Passing function as arguments
function doOperationOn(x, operation) {
    return operation(x);
}
var result = doOperationOn(5, multiplyBy2);
console.log(result);
result = doOperationOn(5, multiplyBy3);
console.log(result);