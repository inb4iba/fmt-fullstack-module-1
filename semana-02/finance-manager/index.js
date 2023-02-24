import { FinancialTransaction } from "./classes/FinancialTransaction.js";
import { FinancialTransactionsManager } from "./classes/FinancialTransactionManager.js";

const financialManager = new FinancialTransactionsManager();

[...document.getElementsByClassName("add-btn")].map((btn) =>
  btn.addEventListener("click", (e) => askForItem(e.target.dataset.isIncome))
);

function askForItem(isIncome) {
  const description = window.prompt("Entre a descrição do valor:");
  const value = +window.prompt("Entre o valor:");

  if (isIncome)
    financialManager.income.push(new FinancialTransaction(description, value));
  else
    financialManager.outcome.push(new FinancialTransaction(description, value));

  updateData();
}

function updateData() {
  financialManager.updatePage();
}
