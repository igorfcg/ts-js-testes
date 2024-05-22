

import * as cordeiro from "./fila";
import { Fileira, alunos } from "./types";

const alunos = [
    "João", "Felipe", "Maria", "José", "Ana",
    "Carlos", "Pedro", "Paulo", "Lucas", "Mariana",
    "Juliana", "Fernanda", "Rafael", "Ricardo", "Jorge",
    "Miguel"
];


const qtdAlunos = alunos.length;
const qtdFileiras = Math.ceil(qtdAlunos / 5);
const salaDeAula = cordeiro.create(qtdFileiras);

function main() {
    let alunoIndex = 0; 

    for (let a = 0; a < salaDeAula.length; a++) {
        salaDeAula[a] = [];
        for (let b = 0; b < 5; b++) {
            if (alunoIndex < alunos.length) {
                cordeiro.enqueue(salaDeAula[a], alunos[alunoIndex])
        
                alunoIndex++;
            }
        }
    }

    console.log(JSON.stringify(salaDeAula, null, 2));
}

function retirar(){
 
    for (let a = 0; a < salaDeAula.length; a++) {

        for (let b = 0; b < 5; b++) {
        salaDeAula[a][b].pop;
        console.log(salaDeAula[a][b],"Tchau")
        console.log("Sala",a);
        console.log("Fileira",b);
        console.log("--------------------------------------")
        }
    }
}
main()
retirar();