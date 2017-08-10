var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function(card1, card2){
	if(card1 === card2){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(cardId){
	console.log(cards[cardId] + " was flipped over");
	cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length === 2){
		checkForMatch(cardsInPlay[0],cardsInPlay[1]);
	}
}

flipCard(0);
flipCard(2);