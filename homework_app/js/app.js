document.addEventListener('DOMContentLoaded', () => {
  const playerProfile = document.querySelector('#playerProfileList');

  const button = document.querySelector('#new-item-form');
  button.addEventListener('submit', (e) => {
    console.dir(e.target);
    e.preventDefault();


  const newDiv = document.createElement('div');
  newDiv.classList.add('list-item');

  const nameEntry = document.createElement('h2');
  nameEntry.textContent = e.target.name.value;
  newDiv.appendChild(nameEntry);

  const positionEntry = document.createElement('h3');
  positionEntry.textContent = e.target.position.value;
  newDiv.appendChild(positionEntry);

  const ageEntry = document.createElement('h3');
  ageEntry.textContent = e.target.age.value;
  newDiv.appendChild(ageEntry);

  const nationalityEntry = document.createElement('h3');
  nationalityEntry.textContent = e.target.nationality.value;
  newDiv.appendChild(nationalityEntry);

  playerProfile.appendChild(newDiv);

  e.target.reset();

});

});
