"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cordeiro = __importStar(require("./fila"));
// Array de alunos nas fileiras
const alunos = [
    "João",
    "Felipe",
    "Maria",
    "José",
    "Ana",
    "Carlos",
    "Pedro",
    "Paulo",
    "Lucas",
    "Mariana",
    "Juliana",
    "Fernanda",
    "Rafael",
    "Ricardo",
    "Jorge",
    "Miguel",
];
// Cada fileira pode ter NO MÁXIMO 5 alunos
const qtdAlunos = alunos.length;
const qtdFileiras = Math.ceil(qtdAlunos / 5);
const salaDeAula = cordeiro.create(qtdFileiras);
for (let i = 0; i < qtdFileiras; i++) {
    const fileira = {
        numeroDaFileira: i,
        alunos: cordeiro.create(5)
alunos.splice(0, 5);
    alunos.splice(0, 5);
    alunos.forEach(nomeDoAluno => {
        if (cordeiro.isFull(fileira.alunos)) {
            return;
        }
        const aluno = {
            nome: nomeDoAluno
        };
        cordeiro.enqueue(fileira.alunos, aluno);
        alunos.splice(0, 5);
        cordeiro.enqueue(salaDeAula, fileira.alunos);
    });
}
console.log(salaDeAula);
// Função main
function main() {
    for (let i = 0; i < qtdFileiras; i++) {
        const fileiraAtual = {
            alunos: cordeiro.peek(salaDeAula),
            numeroDaFileira: i
        };
        console.log(`Fileira ${fileiraAtual.numeroDaFileira + 1}`);
        // Para cada aluno da fileira, remove-o da fileira e "da tchau"
        for (let j = 0; j < 5; j++) {
            if (cordeiro.isEmpty(fileiraAtual.alunos)) {
                return;
            }
            const alunoAtual = cordeiro.dequeue(fileiraAtual.alunos);
            console.log(`${alunoAtual.nome} se levantou da cadeira ${j + 1}`);
            console.log(`Tchau ${alunoAtual.nome}!`);
            console.log("-------------------------------");
        }
        console.log("\n");
        cordeiro.dequeue(salaDeAula);
    }
}
main();
