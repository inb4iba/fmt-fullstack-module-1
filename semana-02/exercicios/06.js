// function getTicketValue(gender, age, isProgrammingStudent, isLab365Student) {
//   if (age < 18 && !isProgrammingStudent) return -1;
//   if (age >= 60 || isLab365Student) return 0;
//   if (gender === "female") return 50;
//   return 80;
// }

// function generateTicket(gender, age, isProgrammingStudent, isLab365Student) {
//   const value = getTicketValue(
//     gender,
//     age,
//     isProgrammingStudent,
//     isLab365Student
//   );
//   if (value < 0) return console.log("Entrada não permitida.");
//   console.log(`O valor do seu ingresso é: R$ ${value}`);
// }

// generateTicket("female", 65, true, false);

const idade = window.prompt("Qual a sua idade?");
const estudanteProgramaco = window.prompt("É estudante de programação?");
let estudanteLab365;
let genero;
let precoIngresso;

if (idade < 18 && !estudanteProgramaco) {
  console.log("Entrada não permitida.");
} else {
  estudanteLab365 = window.prompt("É estudante do Lab365?");
  if (idade > 60 || estudanteLab365) {
    console.log("Entrada gratuita");
  } else {
    genero = window.prompt("Qual seu genero?");
    if (genero === "feminino") {
      precoIngresso = 50;
      console.log(`Preço do ingresso é: R$ ${precoIngresso}`);
    } else {
      precoIngresso = 80;
      console.log(`Preço do ingresso é: R$ ${precoIngresso}`);
    }
  }
}
