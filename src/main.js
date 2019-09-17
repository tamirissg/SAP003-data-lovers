const data = RICKANDMORTY.results;
const menuFiltro = document.getElementById("filtro-tipos");



menuFiltro.addEventListener("change", funcao());

function funcao() {
   selecionados(app.filterData(data, menuFiltro.value));
};


window.onload = () => {
    carregaMenuTipos(data);
}

function carregaMenuTipos(data) {
    const rickandmortygender = [];
    data.map(gender => {
        if(!rickandmortygender.includes(gender)) {
            rickandmortygender.push(gender);
        } else {
            return false;
        }
    });

    menuFiltro.innerHTML = "";
    menuFiltro.innerHTML = `<option value ="none">Selecionefiltro</option>`;
    menuFiltro.innerHTML += rickandmortygender.map(item => 
    `<option value="${item.gender}">${item.gender}</option>`).join("");

}

function selecionados(arr) {
    const mostrarCardsDiv = document.getElementById ("main");
    mostrarCardsDiv.innerHTML ="";
    arr.forEach(data => {
        mostrarCardsDiv.innerHTML += `
        <div>
          <img src="${data.image}"/>
          <h4><p class ="name">Name:${data.name}</p></h4>
          <h5><p class ="gender">Gender:${data.gender}</p></h5>
          <h6><p class ="status">Status:${data.status}</p></h6>
        </div> `
    });
}




























