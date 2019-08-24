/*

Title:     Memory Game Main Style Sheet
Author:    Bruno DaSilva
File Type: JavaScrip  

*/

/*
Step 1:
	Creating an array for the four cards
*/

//creating an object for cards
var cards = [
	{
		rank: "queen", 
		suit: "hearts", 
		cardImage: "images/queen-of-hearts.png"
	},

	{
		rank: "queen", 
		suit: "diamonds", 
		cardImage: "images/queen-of-diamonds.png"
	},

	{
		rank: "king", 
		suit: "hearts", 
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king", 
		suit: "diamonds", 
		cardImage: "images/king-of-diamonds.png"
	}

];

// Step 2: empty array for cards in Play
var cardsInPlay = [];


//Function check for a match
function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match")
	}else{
		console.log("Sorry, try again");
	}
}
//Function Project ->  create a function 

function flipCard(cardId){

	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();


	if (cardsInPlay.length === 2) {

	alert("You found a match!");

	}else if (cardsInPlay[0] === cardsInPlay[1]){

	alert("You found a match!");

	}

	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].suit);
}

flipCard(0);
flipCard(2);





