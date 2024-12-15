async function has(){
    const url = 'https://cat14.p.rapidapi.com/v1/images/search?limit=10';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ce670b6670msha0f6220fdbfcba7p1d6888jsnfd64eb1e8c81',
        'X-RapidAPI-Host': 'cat14.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      const urls = result.map(cat => cat.url);
      const height = result.map(cat => cat.height);

        document.getElementById('catImage1').src= urls[0];


        document.getElementById('catImage2').src= urls[1];
        document.getElementById('catImage3').src= urls[2];
        document.getElementById('catImage4').src= urls[3];
        document.getElementById('catImage5').src= urls[4];
        document.getElementById('catImage6').src= urls[5];
        document.getElementById('catImage7').src= urls[6];
        document.getElementById('catImage8').src= urls[7];
        document.getElementById('catImage9').src= urls[8];
        document.getElementById('catImage10').src= urls[9];


    } catch (error) {
      console.error(error);
    }
    
    }
    
    has();

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        has();
      }
    
      