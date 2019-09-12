// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const infoCharacters = (parentElement) => {
  RICKANDMORTY.results.map(value => {

    let info = [value.name, value.status, value.gender];

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    let imagePath = value.image;
    const img = document.createElement("img");
    img.setAttribute("class", "card-image");
    img.src = imagePath;
    card.append(img);

    info.map(item => {
      const list = document.createElement("li");
      list.setAttribute("class", "card-info");
      list.innerHTML += item;
      card.append(list);
    });

    parentElement.append(card);
  });
};

window.infoCharacters = infoCharacters;