var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	}
];
var cardsInPlay = [];

var flippedCards = [];

var score = 0;

var checkForMatch = function(card1, card2){
	setTimeout(function(){
		if(card1.rank === card2.rank){
			alert("You found a match!");
			score += 2;
			document.getElementById('score').textContent = score;
			if(score >= cards.length){
				alert("You Win!");
			}
		} else {
			alert("Sorry, try again.");
			var flipBack = document.getElementsByTagName('img');
			for(var i = 0; i<cards.length; i++){
				var pic = flipBack[i].getAttribute('src');
				if((pic === card1.cardImage)||(pic === card2.cardImage)){
					flipBack[i].setAttribute('src', "images/back.png")
				}
			}
		}
	}
	, 250);
	cardsInPlay = [];
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	if(this.getAttribute('src') === "images/back.png"){
		console.log("User flipped " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		if(cardsInPlay.length == 1){
			if(cards[cardId] === cardsInPlay[0]){
				return;
			}
		}
		cardsInPlay.push(cards[cardId]);
		//cardsInPlay.push(cards[cardId].rank);
		this.setAttribute('src', cards[cardId].cardImage);
		if(cardsInPlay.length === 2){
			checkForMatch(cardsInPlay[0],cardsInPlay[1]);
		}
	}
}

var createBoard = function(){
	for(var i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	document.getElementById('score').textContent = score;
}

var reset = function(){
	score = 0;
	document.getElementById('score').textContent = score;
	cardsInPlay = [];
	var imgs = document.getElementsByTagName('img');
	for(var i=0; i<imgs.length; i++){
		imgs[i].setAttribute('src', "images/back.png")
	}
}

document.getElementById('reset').addEventListener('click', reset);

createBoard();