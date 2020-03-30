$(document).ready(function() {
  $("form#creams").submit(function(event) {
  event.preventDefault(); 
  var creams = ["cream1", "cream2", "cream3", "cream4", "cream5"];
  console.log(creams);
  
    creams.forEach(function(cream) {
      var userInput = $("input#" + cream).val();
      console.log(userInput);
      
      $("." + cream).text(userInput);
      console.log("My favorite ice cream is " + userInput + "!");
      $('.output').append("<li>" + "My favorite ice cream is " + userInput + "</li>");

    });
   
  })
})