const members = [
  {name: 'John', salary: 500},
  {name: 'Micle', salary: 1100},
  {name: 'Arthur', salary: 1000},
  {name: 'Miranda', salary: 5100},
  {name:'Mike', salary: 1300},
  {name:'Linda', salary: 1500}
];


  const getWorthyWorkers = (workersArr) => {
    const worthyWorkers = [];

    workersArr.forEach(currentWorkers => {
      if (currentWorkers.salary > 1000) {
        worthyWorkers.push(currentWorkers.name)
      }
    })

  return worthyWorkers;
};


console.log(getWorthyObj(workers));