$("#card1").flip()
$("#card2").flip()
$("#card3").flip()
$("#card4").flip()
$("#card5").flip()
$("#card6").flip()
$("#card7").flip()
$("#card8").flip()
$("#card9").flip()
$("#card10").flip()
$("#card11").flip()
$("#card12").flip()
$("#card13").flip()
$("#card14").flip()
$("#card15").flip()
$("#card16").flip()
$("#card17").flip()
$("#card18").flip()

let card = document.getElementsByClassName("card")
let cards = [...card]

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", displayCard)
}

$(".card").on("click", function() {
  if ("click") {
    var flipped = addClass("flipped")
  }
})

var displayCard = function() {
  this.classList.toggle("flipped")
  this.classList.toggle("disabled")
  this.classList.toggle("show")
}

//disables click event

// if ($("#element").css("color") == "rgb(0, 0, 0)") {
//   // do something
// }
// $(".noclick").click(function(e) {
//   if (".matched") {
//     e.preventDefault()
//   }
// })

// $("#id").on("click", function() {
//enables click event
//do your thing here
// })

// $("#id").off("click") //disables click event
