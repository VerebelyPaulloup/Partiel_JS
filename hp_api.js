async function getData() {
    const reponse = await fetch("https://hp-api.onrender.com/api/characters")
    const listHP = await reponse.json();
    let conteneur = document.querySelector(".characters");
    let html = "";
    let listHP_12 = listHP.slice(0,30);

    listHP_12.map(perso => {
        html +=
        `
        <div class="${perso.house.toLowerCase()}">
            <a href="./details.html">
            <img src="${perso.image}">
            <p>${perso.name}</p>
            </a>
          </div>
        `
    });
    conteneur.innerHTML = html;
}
getData();