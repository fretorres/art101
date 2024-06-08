const apiUrl = 'https://yesno.wtf/api';
document.getElementById("button").addEventListener("click", function() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with your fetch operation:', error));

});
    
      
      document.getElementById("myButton").addEventListener("click", function() {
          alert(json.answer);
          var img = document.createElement('img');
          img.src = json.image;
          document.body.appendChild(img);
 })