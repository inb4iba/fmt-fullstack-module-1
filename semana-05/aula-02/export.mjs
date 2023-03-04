const teste = () => console.log("teste");

function testeDOM() {
  const h1 = document.createElement("h1");
  h1.textContent = "Hello World";
  document.body.appendChild(h1);
}

export { teste, testeDOM };
