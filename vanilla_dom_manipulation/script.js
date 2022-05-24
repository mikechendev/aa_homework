document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const favoriteSubmit = (e) => {
    e.preventDefault();

    const favoritePlace = document.querySelector('.favorite-input');
    const favorite = favoritePlace.value;
    favoritePlace.value = '';

    const newListLi = document.createElement('li');
    newListLi.textContent = favorite;

    const favoritesLi = document.getElementById('sf-places');
    favoritesLi.appendChild(newListLi);
  }

  const listSubmitButton = document.querySelector('.favorite-submit');
  listSubmitButton.addEventListener('click', favoriteSubmit);


  // adding new photos

  // --- your code here!

  const showPhotoForm = (e) => {
    const photoFormDiv = document.querySelector('.photo-form-container');
    if (photoFormDiv.className === 'photo-form-container') {
      photoFormDiv.className = 'photo-form-container hidden';
    } else {
      photoFormDiv.className = 'photo-form-container';
    }
  }

  const photoFormShowButton = document.querySelector('.photo-show-button');
  photoFormShowButton.addEventListener('click', showPhotoForm);

  const handlePhotoSubmit = (e) => {
    e.preventDefault();

    const photoUrlInput = document.querySelector('.photo-url-input');
    const photoUrl = photoUrlInput.value;
    photoUrlInput.value = '';

    const newImg = document.createElement('img');
    newImg.src = photoUrl;

    const newPhotoLi = document.createElement('li');
    newPhotoLi.appendChild(newImg);

    const dogPhotosList = document.querySelector('.dog-photos');
    dogPhotosList.appendChild(newPhotoLi);
  }

  const photoSumbitButton = document.querySelector('.photo-url.submit');
  photoSubmitButton.addEventListener('click', handlePhotoSubmit);
});
