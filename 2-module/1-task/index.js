function sumSalary(salaries) {
  let num = 0;  
  for (let key in salaries) {
      if (typeof salaries[key] == 'number' && !Number.isNaN(salaries[key]) && Number.isFinite(salaries[key])) {
      num += salaries[key];
    }
  }
  return num;
};
