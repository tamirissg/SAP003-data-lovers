const data = RICKANDMORTY.results;
const menuFiltro = document.getElementById("filtro-tipos");



menuFiltro.addEventListener("change", funcao);

function funcao() {
    console.log(menuFiltro.value)
   selecionados(app.filterData(data, menuFiltro.value));
};


window.onload = () => {
    carregaMenuTipos(data);
    selecionados(data)
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

function selecionados(arr) {
    const mostrarCardsDiv = document.getElementById ("main");
    // mostrarCardsDiv.innerHTML ="";
    let layout = "";
    arr.forEach(data => {
        layout += `
        <div>
          <img src="${data.image}"/>
          <h4><p class ="name">Name:${data.name}</p></h4>
          <h5><p class ="gender">Gender:${data.gender}</p></h5>
          <h6><p class ="status">Status:${data.status}</p></h6>
        </div> `
    });
    mostrarCardsDiv.innerHTML = layout
}




























