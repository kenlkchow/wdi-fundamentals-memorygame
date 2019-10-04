console.log("Up and running!");
var cards = [
	{ 
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	}
];

var cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else if (cardsInPlay.length === 2) {
  alert("Sorry, try again.");
}
}

function flipcard() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage)
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit)

};

function createBoard(){
	for (i = 0; i < 4; i ++){
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipcard);
	document.getElementById("game-board").appendChild(cardElement);
}
}

createBoard();







