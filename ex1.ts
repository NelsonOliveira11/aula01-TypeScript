//Exercício 1
// Crie um arquico chamado ex1.ts - Um programa que recebe o número colocado pelo usuário 
// e mostre seus 2 antecessores e seus 2 sucessores

import PromptSync from "prompt-sync";

var prompt = PromptSync();
var a : number = Number(prompt("Insira um valor:"));
console.log("O valor inserido foi:", a);
console.log("Os valores anteriores a ele são:", (a)-1, "e", (a)-2);
console.log("Os valores que o sucedem são:", (a)+1, "e", (a)+2);
