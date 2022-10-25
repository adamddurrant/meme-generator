//After complete load
document.addEventListener('DOMContentLoaded', function () {

  //Form submission
  document.querySelector('form').onsubmit = function () {
    //API fetch and response
    fetch('https://api.imgflip.com/get_memes')
      //Then take response a provide data in JSON
      .then(response => response.json())
      //Then use it in the following way
      .then(data => {

				//hide the 'click above' text
				document.querySelector('#nomeme').style.display = 'none';

				//generate random number between 0-100
				let rand = Math.floor(Math.random() * 100) + 1;

				//select random URL from API
        const url = data.data.memes[rand].url;

        if (url !== undefined) {

					//place url into img source if data is not undefined
          document.querySelector('#result').src = `${url}`;

        } else {
					//otherwise amend title to invalid meme
          document.querySelector('#result').title = 'Invalid meme';

        };

      });
      
    // Prevents form from taking users to new page
    return false;
  }

});