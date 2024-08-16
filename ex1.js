"use strict";
//Exercício 1
// Crie um arquico chamado ex1.ts - Um programa que recebe o número colocado pelo usuário 
// e mostre seus 2 antecessores e seus 2 sucessores
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = (0, prompt_sync_1.default)();
var a = Number(prompt("Insira um valor:"));
console.log("O valor inserido foi:", a);
console.log("Os valores anteriores a ele são:", (a) - 1, "e", (a) - 2);
console.log("Os valores que o sucedem são:", (a) + 1, "e", (a) + 2);
