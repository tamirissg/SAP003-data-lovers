
function filterData(data, condition) {
  return data.filter(item => item.gender === condition);   
};

function filterStatus(data, condition) {
  return data.filter(item => item.status === condition); 
};

function sortNames(arr, condition) {
  if (condition === "sortAZ") {     
    return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (condition === "sortZA") {
    return arr.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
};

function static (data) {
  return ((data.length*100)/493).toFixed();
}

app = {
  filterData,
  filterStatus,
  sortNames,
  static,
};
