//challege 4 - Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown

console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (e) => {
  //challenge 1
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    //console.log(typeof data)
    //console.log(data);
    const eachImg = data.message
    for (const oneImage of eachImg) {
      const createImgEl = document.createElement('img');
      createImgEl.src = oneImage;
      document.getElementById('dog-image-container').appendChild(createImgEl);
    }
  })

  //challenge 2
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    //console.log(typeof data);
    const eachDog = data.message;
    for (const oneDog in eachDog) {
      const listItemCreate = document.createElement('li');
      listItemCreate.innerText = oneDog;
      listItemCreate.id = oneDog;
      document.getElementById('dog-breeds').appendChild(listItemCreate);
    }
  })

//challenge 3
  const ulList = document.getElementById('dog-breeds');
  //console.log(ulList);
  ulList.addEventListener('click', (e) => {
  //console.log(e);
  //console.log(e.target);
  e.target.style.color = '#74ad75';
});

//challenge 4
  document.getElementById('breed-dropdown').onchange = handleChange;
  function handleChange(e) {
    //console.log(e.target);
    //console.log(e.target.value)
    const letterSelected = e.target.value;
    console.log(letterSelected);
    let ulList = document.getElementById('dog-breeds');
    //console.log(ulList);
    //console.log(typeof ulList);
    //ulList.style.display = 'none';
    let liList = ulList.querySelectorAll('li');
    //console.log(liList);
    for (let li of liList){
      //console.log(li.innerText[0])
      if (li.innerText[0] !== letterSelected){
        li.style.display = 'none'
      } else {
        li.style.display = 'list-item'
      }
    }
  }

});