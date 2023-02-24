let globalScope = "Aqui é o escopo global.";

function functionOne() {
  let functionScope = "Aqui é o escopo de função.";
  console.log(`-  ${functionScope}`);

  for (let i = 0; i < 1; i++) {
    let blockScope = "Aqui é o escopo de bloco.";
    console.log(`-    ${blockScope}`);
  }
}

functionOne();
console.log(`-${globalScope}`);
