//adds an event listener to the button
document.getElementById('submit').addEventListener('click', function() {
  //gets the value of the input with an id of level
  var level = document.getElementById('level').value;
  //gets the value of the input with an id of quantity
  var quantity = document.getElementById('quantity').value;
  //gets the div with an id of display
  var display = document.getElementById('display')
  //set the contents of the div with an id of display
  //to be empty.  Why do you think this is done?
  display.innerHTML = ""

  //this line of code below will run only once to add the 
  //selected emotion to print to the div.  You must write
  //either a for loop or a while loop that will print 
  //according to the number entered in the input box
  display.innerHTML += level;

});
