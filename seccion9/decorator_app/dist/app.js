"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const validations = {};
function validator(types) {
    return function (target, propName) {
        validations[target.constructor.name] = {
            [propName]: types
        };
    };
}
class Person {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
__decorate([
    validator(['required'])
], Person.prototype, "email", void 0);
__decorate([
    validator(['required', 'password'])
], Person.prototype, "password", void 0);
function validate(obj) {
    const validationRegistered = validations[obj.constructor.name];
    if (!validationRegistered) {
        return true;
    }
    let isValid = true;
    for (const prop in validationRegistered) {
        for (const validator of validationRegistered[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'password':
                    isValid = isValid && obj[prop].length > 5;
                    break;
                default:
                    break;
            }
        }
    }
    return isValid;
}
const personForm = document.querySelector('form');
personForm === null || personForm === void 0 ? void 0 : personForm.addEventListener('submit', event => {
    event.preventDefault();
    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');
    const newPerson = new Person(emailElem.value, passwordElem.value);
    if (!validate(newPerson)) {
        alert('El valor ingresado es incorrecto');
        return;
    }
    console.log(newPerson);
});
