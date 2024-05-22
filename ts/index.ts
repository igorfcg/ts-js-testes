import * as cordeiro from "./fila";
import { Fileira, Aluno } from "./types";
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
const qtdAlunos = alunos.length
const qtdFileiras = Math.ceil(qtdAlunos / 5)
const salaDeAula = cordeiro.create(qtdFileiras)                                                                                                                                                        

for(let i = 0; i < qtdFileiras; i++) {
  const fileira: Fileira = {
    numeroDaFileira: i,
    alunos: cordeiro.create(5)
  }

// Inserindo/populando 5 alunos por fileira
alunos.forEach(nomeDoAluno => {
if(cordeiro.isFull(fileira.alunos)) {
  return
}

const aluno: Aluno = {
  nome: nomeDoAluno
}

cordeiro.enqueue(fileira.alunos, aluno)





cordeiro.enqueue(salaDeAula, fileira.alunos)
})
alunos.splice(0, 5)
}
console.log(salaDeAula);


// Função main


function main(){
  for(let i = 0; i < qtdFileiras; i++) {
    const fileiraAtual: Fileira = {
      alunos: cordeiro.peek(salaDeAula),
      numeroDaFileira: i
    }

    console.log(`Fileira ${fileiraAtual.numeroDaFileira + 1}`);
  
    // Para cada aluno da fileira, remove-o da fileira e "da tchau"
    for(let j = 0; j < 5; j++) {

      if(cordeiro.isEmpty(fileiraAtual.alunos)) {
        return
      }

      const alunoAtual = cordeiro.dequeue(fileiraAtual.alunos)

      console.log(`${alunoAtual.nome} se levantou da cadeira ${j + 1}`);
      console.log(`Tchau ${alunoAtual.nome}!`);
      console.log("-------------------------------");
    }
    
    console.log("\n");

    cordeiro.dequeue(salaDeAula)
  }}



main()