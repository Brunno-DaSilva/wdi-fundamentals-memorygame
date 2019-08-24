/*

Title:     Memory Game Main Style Sheet
Author:    Bruno DaSilva
File Type: JavaScrip  

*/

/*
Step 1:
	Creating an array for the four cards
*/

//Step 1: array of cards 
var cards = ['queen', 'queen', 'king', 'king'];

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

	cardsInPlay.push(cards[cardId]);
	checkForMatch();


	if (cardsInPlay.length === 2) {

	alert("You found a match!");

	}else if (cardsInPlay[0] === cardsInPlay[1]){

	alert("You found a match!");

	}

	console.log("User flipped " + cards[cardId]);
}

flipCard(0);
flipCard(2);



