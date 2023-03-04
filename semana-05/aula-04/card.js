export function createCard(info) {
  const card = document.querySelector(".card");

  card.innerHTML = `
  <img
        src="${info.imageUrl}"
        alt=""
      />
      <div>
        <p>${info.name}</p>
        <p>${info.description}</p>
      </div>
  `;
}
