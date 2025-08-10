const badBtnElem = document.querySelector('.bad-actions');
const goodBtnElem = document.querySelector('.good-actions');
const countStarsElem = document.querySelector('.js-text-stars');
const needStarsElem = document.querySelector('.js-text-desirable');

let customStorage = {
  needStars: 0,
  currentStars: 0,
};

document.addEventListener('DOMContentLoaded', e => {
    if (localStorage.getItem('informationStars') == null) {
      
    const stars = parseInt(prompt('Кількість необхідних зірок'));
        customStorage.needStars = stars ? stars : 0;
        needStarsElem.textContent = customStorage.needStars;
    localStorage.setItem('informationStars', JSON.stringify(customStorage));
  } else {
        customStorage = JSON.parse(localStorage.getItem('informationStars'));
        
        countStarsElem.textContent = customStorage.currentStars;
        needStarsElem.textContent = customStorage.needStars;
        }
});

badBtnElem.addEventListener('click', addStars);

goodBtnElem.addEventListener('click', addStars);

function addStars(event) {
  try {
    customStorage.currentStars += event.target.closest('.bonus-item').value;
      localStorage.setItem('informationStars', JSON.stringify(customStorage));
      countStarsElem.textContent = customStorage.currentStars;
      checkCount();
      
  } catch (error) {
      console.error("Це не кнопка!");    
  }
}

function checkCount() {
    if (customStorage.needStars < customStorage.currentStars){
        console.log("You win");
        localStorage.removeItem('informationStars');
        customStorage.currentStars = 0;
        customStorage.needStars = 0;
    }   
}