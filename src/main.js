const data = RICKANDMORTY.results;
const menuFiltro = document.getElementById("filtro-gender");
const filtroStatus = document.getElementById("filtro-status");
const ordenar = document.getElementById("filtro-ordenar")

menuFiltro.addEventListener("change", funcao);

function funcao() {
    selectionCard(app.filterData(data, menuFiltro.value));
};


window.onload = () => {
    carregaMenuTipos(data);
    selectionCard(data);
    carregaMenuStatus(data);
}

function carregaMenuTipos(data) {
    const rickandmortygender = [];
    data.map(item => {
        if(!rickandmortygender.includes(item.gender)) {
            rickandmortygender.push(item.gender);
        } else {
            return false;
        }
    });

    menuFiltro.innerHTML = "";
    menuFiltro.innerHTML = `<option value ="none">Filter Gender</option>`;
    menuFiltro.innerHTML += rickandmortygender.map(item => 
    `<option value="${item}">${item}</option>`).join("");

}

function selectionCard(arr) {
    const mostrarCardsDiv = document.getElementById ("main");
    let layout = "";
    arr.forEach(data => {
        layout += `
        <div class ="card">
          <img  class ="image" src="${data.image}"/>
          <p class ="name"> <span>Name:</span> &nbsp ${data.name}</p><hr>
          <p class ="gender"><span>Gender:</span> &emsp;${data.gender}</p><hr>
          <p class ="status"><span>Status:</span> &emsp;${data.status}</p><hr>
        </div> `
    });
    mostrarCardsDiv.innerHTML = layout
}

filtroStatus.addEventListener("change", funcaoStatus);

function funcaoStatus() {
selectionCard(app.filterStatus(data, filtroStatus.value))}

function carregaMenuStatus(data) {
    const rickandmortystatus = [];
    data.map(item => {
        if(!rickandmortystatus.includes(item.status)) {
            rickandmortystatus.push(item.status);
        } else {
            return false;
        }
    });
    
filtroStatus.innerHTML="";
filtroStatus.innerHTML=`<option value ="none">Filter Status</option>`;
filtroStatus.innerHTML += rickandmortystatus.map(item => 
    `<option value="${item}">${item}</option>`).join("");
}
function sortCharacters(data) {
    const sortCriteria = document.getElementById("sortCharacters");
    const names = data.sort((characterA, characterB) => {
        const nameA = characterA.name.toUpperCase();
        const nameB = characterB.name.toUpperCase();
         if(sortCriteria.value == "sortAZ") {
             return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
          } else if (sortCriteria.value == "sortZA") {
               return (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0;
           }
        });
    selectionCard(names)
}
document.getElementById("sortCharacters").addEventListener("change", function(){ return sortCharacters(data); });