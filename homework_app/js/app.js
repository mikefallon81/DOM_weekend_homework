document.addEventListener('DOMContentLoaded', () => {
  const playerProfile = document.querySelector('#playerProfileList');

  const button = document.querySelector('#new-item-form');
  button.addEventListener('submit', (e) => {
    console.dir(e.target);
    e.preventDefault();


  const newDiv = document.createElement('li');
  newDiv.classList.add('list-item');

  const nameEntry = document.createElement('ul');
  nameEntry.textContent = e.target.name.value;
  newDiv.appendChild(nameEntry);

  const positionEntry = document.createElement('ul');
  positionEntry.textContent = e.target.position.value;
  newDiv.appendChild(positionEntry);

  const ageEntry = document.createElement('ul');
  ageEntry.textContent = e.target.age.value;
  newDiv.appendChild(ageEntry);

  const nationalityEntry = document.createElement('ul');
  nationalityEntry.textContent = e.target.nationality.value;
  newDiv.appendChild(nationalityEntry);

  const fanStatusEntry = document.createElement('ul');
  fanStatusEntry.textContent = e.target.fanStatus.value;
  newDiv.appendChild(fanStatusEntry);

  playerProfileList.appendChild(newDiv);

  e.target.reset();

});

const deleteButton = document.querySelector('#delete-all');
deleteButton.addEventListener('click', (e) => {
  while (playerProfileList.firstChild) {
    playerProfileList.removeChild(playerProfileList.firstChild)
  }

});

});
