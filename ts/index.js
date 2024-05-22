"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cordeiro = require("./fila");
// Array de alunos nas fileiras
var alunos = [
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
var qtdAlunos = alunos.length;
var qtdFileiras = Math.ceil(qtdAlunos / 5);
var salaDeAula = cordeiro.create(qtdFileiras);
var _loop_1 = function (i) {
    var fileira = {
        numeroDaFileira: i,
        alunos: cordeiro.create(5)
    };
    // Inserindo/populando 5 alunos por fileira
    alunos.forEach(function (nomeDoAluno) {
        if (cordeiro.isFull(fileira.alunos)) {
            return;
        }
        var aluno = {
            nome: nomeDoAluno
        };
        cordeiro.enqueue(fileira.alunos, aluno);
        cordeiro.enqueue(salaDeAula, fileira.alunos);
    });
    alunos.splice(0, 5);
};
for (var i = 0; i < qtdFileiras; i++) {
    _loop_1(i);
}
console.log(salaDeAula);
// Função main
function main() {
    for (var i = 0; i < qtdFileiras; i++) {
        var fileiraAtual = {
            alunos: cordeiro.peek(salaDeAula),
            numeroDaFileira: i
        };
        console.log("Fileira ".concat(fileiraAtual.numeroDaFileira + 1));
        // Para cada aluno da fileira, remove-o da fileira e "da tchau"
        for (var j = 0; j < 5; j++) {
            if (cordeiro.isEmpty(fileiraAtual.alunos)) {
                return;
            }
            var alunoAtual = cordeiro.dequeue(fileiraAtual.alunos);
            console.log("".concat(alunoAtual.nome, " se levantou da cadeira ").concat(j + 1));
            console.log("Tchau ".concat(alunoAtual.nome, "!"));
            console.log("-------------------------------");
        }
        console.log("\n");
        cordeiro.dequeue(salaDeAula);
    }
}
main();
