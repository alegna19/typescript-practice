"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//String I can specify the Type or not
//let greetings: string = 'Angie';
var greetingss = 'Angie';
greetingss.toUpperCase();
console.log(greetingss);
//Number
//let userId: number = 3333
var userIdd = 3333;
userIdd.toFixed();
//Boolean
var isLoggedInn = false;
//Functions
var addTwo = function (num) {
    return num + 2;
};
var getUpper = function (value) {
    return value.toUpperCase();
};
var signUpUser = function (name, email, isPaid) {
};
//Its passing a default value, in case when the function is called is not passing the isPad parameter.
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(6);
getUpper("Angie");
signUpUser("Maria", "Angie@gmail.com", true);
loginUser("Pepsi", "p@meowmix.com");
//TypeScript knows that the array is Type String 
var heros = ["Thor", "Spiderman", "Wonderwoman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//Because the function is not returning anything we put void
var consoleError = function (error) {
    console.log(error);
};
//Never is a Type that allow to handle something in this case a message Error, is like void but handle
var handleError = function (msg) {
    throw new Error(msg);
};
