"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
var newUser = {
    name: "Angie",
    email: "angie@gmail.com",
    isPaid: true
};
createUser(newUser);
var createOtherUser = function (user) {
    return { name: "", email: "", isActive: true };
};
createOtherUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "pepsi",
    email: "pepsi@meow.com",
    isActive: true
};
myUser.email = "4555";
