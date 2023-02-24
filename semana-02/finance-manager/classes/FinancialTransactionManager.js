export class FinancialTransactionsManager {
  income;
  outcome;
  #actualMonth;
  #totalIncome;
  #totalOutcome;

  constructor(incomeArray = [], outcomeArray = []) {
    this.#actualMonth = "janeiro";

    this.income = incomeArray;
    this.outcome = outcomeArray;

    this.updatePage();
  }

  updatePage() {
    this.#updateTotalIncome();
    this.#updateTotalOutcome();

    document.getElementById("month").innerHTML = this.#actualMonth;
    document.getElementById("total-earnings").innerHTML = this.#totalIncome;
    document.getElementById("total-expenses").innerHTML = this.#totalOutcome;
    document.getElementById("final-balance").innerHTML =
      this.#calculateBalance();
    document.querySelector("#earnings-box .list").innerHTML =
      this.#generateListItems(this.income);
    document.querySelector("#expenses-box .list").innerHTML =
      this.#generateListItems(this.outcome);
  }

  #generateListItems(array) {
    return array
      .map((item) => `<li>${item.description}: R$ ${item.value}</li>`)
      .join("");
  }

  #updateTotalIncome() {
    this.#totalIncome = this.income.reduce(
      (total, item) => total + item.value,
      0
    );
  }

  #updateTotalOutcome() {
    this.#totalOutcome = this.outcome.reduce(
      (total, item) => total + item.value,
      0
    );
  }

  #calculateBalance() {
    const balance = this.#totalIncome - this.#totalOutcome;
    document.getElementById("balance").className = `border indicator ${
      balance >= 0 ? "green" : "red"
    }`;
    return balance;
  }
}
