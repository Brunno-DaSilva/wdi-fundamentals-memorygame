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

// Step 3: variable to represent the first card that the user flipps
var cardOne = cards[0]; 

//Step5: Store the third Item of the array
var cardTwo = cards[2];

//Step: 4 assign cardOne to empty array cardsInPlay
cardsInPlay.push(cardOne); 

//Step 6: push cardTwo to the end of the CardsInPlay array
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2) {

	alert("You found a match!");

}else if (cardsInPlay[0] === cardsInPlay[1]){

	alert("You found a match!");

}




//***Testing: console log for testing****.

	console.log("User flipped " + cardsInPlay);

//**** Testing: console log for testing ****//