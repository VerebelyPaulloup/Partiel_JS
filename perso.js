let conteneur = document.querySelector("main");
let html = "";

const params = new URLSearchParams(window.location.search);
const personnageId = params.get('id');


async function loadPerso() {
    const reponse = await fetch(`https://hp-api.onrender.com/api/character/${personnageId}`);
    const personnageData = await reponse.json();
    
    personnageData.map(perso => {
        if(perso.house == "Gryffindor"){let image = "./logo/Grynffindor"};
        if(perso.house == "Hufflepuff"){let image = "./logo/Grynffindor"};
        if(perso.house == "Ravenclaw"){let image = "./logo/Grynffindor"};
        if(perso.house == "Slytherin"){let image = "./logo/Slytherin"}; 

    html += `
    <section>
        <h3>${perso.name}</h3>
        <div class="perso">
          <figure class="perso__left">
            <img src="${perso.image}"/>
            <figcaption>${perso.name}</figcaption>
          </figure>
          <div class="perso__right">
            <div><p>Gender</p><p class="attr">${perso.gender}</p></div>
            <div><p>Eye</p><p class="attr">${perso.eyeColour}</p></div>
            <div><p>Hair</p><p class="attr">${perso.hairColor}</p></div>
            <div><p>Date of Birth</p><p class="attr">${perso.dateOfBirth}</p></div>
            <div><p>Patronus</p><p class="attr">${perso.patronus}</p></div>
            <div><p>House</p><p class="attr">${perso.house}</p></div>
        </div>
      </section>
      <section class="house__perso">
        <img src="./images/logo/Gryffindor.png" alt="" srcset="" />
      </section>`});
    conteneur.innerHTML = html;    
};
loadPerso();
