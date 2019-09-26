function filterData(data, condition) {
  return data.slice().filter(item => item.gender === condition);
};

function filterStatus(data, condition) {
  return data.slice().filter(item => item.status === condition);
};

function sortNames(arr, condition) {
  if (condition === "sortAZ") {
    return arr.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (condition === "sortZA") {
    return arr.slice().sort((a, b) => (a.name > b.name ? -1 : 1));
  }
};

function percCalculation(data) {
  return ((data.length * 100) / 493).toFixed();
};

app = {
  filterData,
  filterStatus,
  sortNames,
  percCalculation,
};
