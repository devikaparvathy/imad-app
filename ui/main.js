//counter code
var button = document.getElementById('counter');

button.onclick = function(){
  
  //create a request object
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
      if (request.readyState===XMLHttpRequest.Done) {
          //Take some action
          if (request.status===200){
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
          }
      }
      //Not done yet
  };

  //make the request
  request.open('GET', 'http://devikaparvathym.imad.hasura-app.io/counter',true);
  request.send(null);
};