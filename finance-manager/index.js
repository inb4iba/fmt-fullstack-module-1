var actualMonth = 'janeiro';
var totalEarnings = 0;
var totalExpenses = 0;
var income = [];
var outcome = [];

updatePage();

function updatePage() {
  document.getElementById('month').innerHTML = actualMonth;
  document.getElementById('total-earnings').innerHTML = totalEarnings;
  document.getElementById('total-expenses').innerHTML = totalExpenses;
  document.getElementById('final-balance').innerHTML = calculateBalance();
  document.querySelector('#earnings-box .list').innerHTML =
    generateListItems(income);
  document.querySelector('#expenses-box .list').innerHTML =
    generateListItems(outcome);
}

function generateListItems(array) {
  return array
    .map((item) => `<li>${item.description}: R$ ${item.value}</li>`)
    .join('');
}

function getTotalEarnings() {
  totalEarnings = income.reduce((total, item) => total + item.value, 0);
}

function getTotalExpenses() {
  totalExpenses = outcome.reduce((total, item) => total + item.value, 0);
}

function calculateBalance() {
  const balance = totalEarnings - totalExpenses;
  document.getElementById('balance').className = `border indicator ${
    balance >= 0 ? 'green' : 'red'
  }`;
  return balance;
}

function askForItem(isIncome) {
  const description = window.prompt('Entre a descrição do valor:');
  const value = +window.prompt('Entre o valor:');

  if (isIncome) income.push({ description, value });
  else outcome.push({ description, value });

  updateData();
}

function updateData() {
  getTotalEarnings();
  getTotalExpenses();

  updatePage();
}
