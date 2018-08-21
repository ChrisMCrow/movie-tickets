//back-end
function Ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
}

//Function to add ticket prices together depending on properties.
function priceCheck(object) {
  var prices = {"avengers":6, "deadpool":8, "solo":8, "last-jedi":6, "matinee":0, "evening":3, "children":0, "students":2, "adults":4, "seniors":1};
  var finalPrice = 0;
  var inputArray = Object.values(object);
  inputArray.forEach(function(input) {
    finalPrice = finalPrice + prices[input];
  });
  return finalPrice;
}

//Function to add ticketPrice and movie poster
function resultFunction(totalPrice, ticket) {
  var movieTitle = ticket.movie;
  $("#result div").children().remove();
  $("div#posterResult").append("<img src='img/" + movieTitle + ".jpg' alt='" + movieTitle + "' height=500px>");
  $("div#priceResult").text("$" + totalPrice);
}


//front-end
$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var movieInput = $("#movie-title").val();
    var ageInput = $("#age").val();
    var timeInput = $("#time").val();

    var newTicket = new Ticket(movieInput, ageInput, timeInput);

    var ticketPrice = priceCheck(newTicket);

    resultFunction(ticketPrice, newTicket);
  });
});
