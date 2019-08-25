/*

Title:     Memory Game BY General Assembly
Author:    Bruno DaSilva
File Type: JavaScrip  
Date: 	   August 25, 2019

*/


//array with an object of cards
var cards = [

	{
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];


//empty array to hold user entrances
var cardsInPlay = []


//Slide 6-9 Drwan the board and create the image elements

var createBoard = function() {
//creat the Function and loop in the Image Elements

	for (var i = 0; i < cards.length; i++) {

		//Slide 7: variable for each image element
		var cardElement = document.createElement('img');

		//Slide 8: Setting the back-edn of the card
		cardElement.setAttribute('src', "images/back.png");

		//Slide 8: setting the attribute to the data-id and index
		cardElement.setAttribute('data-id', i);

		//Slide 9: add an event listener to call the flipCard Function
		cardElement.addEventListener('click', flipCard);

		//Slide 9: Lastly, append the card element to the game-board ID
		document.getElementById('game-board').appendChild(cardElement);
	}
};


//flip cards function to display card once it is clicked

var flipCard = function() {

	//Slide 11: Get the data attribute of the card clicked by the user
   var cardId = this.getAttribute("data-id");

   cardsInPlay.push(cards[cardId].rank);
   this.setAttribute("src",cards[cardId].cardImage);
   console.log("User flipped "+ cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();

		cardsInPlay =[];
	}
}

//Fucntion to check user's choice 
var checkForMatch = function() {

  if (cardsInPlay[0] === cardsInPlay[1]) {

    alert("You found a match!");

  } else {

    alert("Not a Match, please try again.");
  }
}

//Reload the browser to initiate a new game

function resetBrowser(){

	return window.location.reload();
}

//Slide 10: Adding CreateBoard() Function
createBoard();








