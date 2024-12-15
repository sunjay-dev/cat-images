let cat_container = document.querySelector('.cat-container');

function has() {  
  fetch("https://cat14.p.rapidapi.com/v1/images/search?limit=10",{
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ce670b6670msha0f6220fdbfcba7p1d6888jsnfd64eb1e8c81',
      'X-RapidAPI-Host': 'cat14.p.rapidapi.com'
    }
  }).then(response => response.json())
  .then(data =>{
    data.map((data) =>{ 
      let div = document.createElement('div');
      div.className = 'cat-card';
    
      let img = document.createElement('img');
      img .className= "cat-image";
      img.src=`${data.url}`;
    
      div.appendChild(img);
      cat_container.appendChild(div);
    }) 
  })
  .catch(error => console.log(error))
}

has();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  has();
}