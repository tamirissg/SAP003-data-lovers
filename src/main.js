const data = RICKANDMORTY.results;
const menuFiltro = document.getElementById("filtro-gender");
const filtroStatus = document.getElementById("filtro-status");

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
          <h4><p class ="name"> <span>Name:</span> ${data.name}</p></h4>
          <h5><p class ="gender"><span>Gender:</span>${data.gender}</p></h5>
          <h6><p class ="status"><span>Status:</span>${data.status}</p></h6>
        </div> `
    });
    mostrarCardsDiv.innerHTML = layout
}

filtroStatus.addEventListener("change", funcaoStatus);

function funcaoStatus() {
    selectionCard(app2.filterStatus(data, filtroStatus.value))}

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