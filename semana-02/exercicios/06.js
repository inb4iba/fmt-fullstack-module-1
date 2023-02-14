function getTicketValue(gender, age, isProgrammingStudent, isLab365Student) {
  if (age < 18 || !isProgrammingStudent) return -1;
  if (age >= 60 || isLab365Student) return 0;
  if (gender === "female") return 50;
  return 80;
}

function generateTicket(gender, age, isProgrammingStudent, isLab365Student) {
  const value = getTicketValue(
    gender,
    age,
    isProgrammingStudent,
    isLab365Student
  );
  if (value < 0) return console.log("Entrada não permitida.");
  console.log(`O valor do seu ingresso é: R$ ${value}`);
}

generateTicket("female", 65, true, false);

// if (idade < 18 || !estudanteProgramaco) {
//   console.log("Entrada não permitida.");
// } else if (idade > 60 || estudante) {
//   console.log("Entrada gratuita");
// } else if(sexo === "feminino"){
//   precoIngresso = 50;
// }else {
//   precoIngresso = 80;
// }

// console.log(`Preço do ingresso é: R$ ${precoIngresso}`);
