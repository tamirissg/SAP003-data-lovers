
function filterData(data, condition){
  return data.filter(item => item.gender === condition);  
}
function filterStatus(data, condition){
  return data.filter(item => item.status === condition); 
}
const app ={
  filterData,
  filterStatus
}















