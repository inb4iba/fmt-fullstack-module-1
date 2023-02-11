function howLongToSalaryTarget(salary, target) {
  let months = 0;
  while (salary < target) {
    months += 6;
    salary *= 1.1;
    console.log(salary);
  }
  console.log(months);
}

howLongToSalaryTarget(2000, 5000);
