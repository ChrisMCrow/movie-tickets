//BACK-END

//ticketPrices object
var ticketPrices = {"avengers":6, "deadpool":8, "solo":8, "last-jedi":6, "matinee":0, "evening":3, "children":0, "students":2, "adults":4, "seniors":1};

//ticket constructor
function Ticket(movie, age, time) {
  this.movie = movie
  this.age = age
  this.time = time
}

//findPrice prototype
Ticket.prototype.findPrice = function() {
  var values = Object.values(this);
  var price = 0
  values.forEach(function(value) {
    price += ticketPrices[value];
  })
  return price;
}

//displayResult prototype
Ticket.prototype.displayResult = function (price) {
  $("div#posterResult").append(
    "<img src='img/" + this.movie +
    ".jpg' alt='" + this.movie +
    "' height=400px>"
  );
  $("div#priceResult").text("$" + price);
}

//resetFields function
function resetFields() {
  $("div#posterResult").empty();
  $("div#priceResult").text("");
}

//FRONT-END
$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();
    resetFields();

    var movieInput = $("select#movie-title").val();
    var ageInput = $("select#age").val();
    var timeInput = $("select#time").val();
    var ticketInstance = new Ticket(movieInput, ageInput, timeInput);
    var instancePrice = ticketInstance.findPrice();

    ticketInstance.displayResult(instancePrice);
  });
});
