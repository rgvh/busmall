'use strict';
// Track the number of absolute times an item is liked as well as percentage of times is is liked when it is displayed

/*
Needs:
Display 3 randomly selected images for user to select the one they would most likely buy
- Continue for 25 iterations and then stop
- Ensure no duclicate images are displayed each round
- Ensure that none of the three pictures in the prior round appear in the following round
- listener for clicks
- Counter for times an image is clicked in a round
- Counter to keep track of the number of times an image is displayed in a round
- Constructor function to create the object for each item


*/

// ==================================
// Global Variables
// ==================================


var likeCounter = 0;
var itemDisplayCounter = 0;
var allItems = [];
var leftImage = document.getElementById('leftItemImg');
// var centerImage = document.getElementById();
// var rightImage = document.getElementById();
var leftItemThatIsOnThePage;  



// ==================================
// Constructors
// ==================================

// Creates BusMall object and pushes it to the allItems array
var MallItem = function(url, name){
  this.imageUrl = url;
  this.itemName = name;
  this.clicks = 0;
  this.displayCounter = 0;

  allItems.push(this);
};


console.log(allItems);


// ==================================
// Initialize the page
// ==================================

// Randomly select three images
// Change the DOM
// Store the index of the items put on the page
// 

var leftItemDiv = document.getElementById('leftItem');

// var centerItemDiv = document.getElementById('centerItem');

// var rightItemDiv = document.getElementById('rightItem');

function handleClickOnLeftItem(event){
  console.cog('clicked on left item');
  likeCounter++;
  leftItemThatIsOnThePage.clicks++;
  
  var leftItemIndex = Math.floor(Math.random() * allItems.length);
  
  leftItemThatIsOnThePage = allItems[leftItemIndex];
  
  leftImage.src = leftItemThatIsOnThePage.imageUrl;
  
  if(likeCounter > 4){
    leftItemDiv.removeEventListener('click', handleClickOnLeftItem);
    
  }
}

leftItemDiv.addEventListener('click', handleClickOnLeftItem);



// ==================================
// Instansiate the objects
// ================================== 

new MallItem('./img/bag.jpg','bag');
new MallItem('./img/banana.jpg','banana');
new MallItem('./img/bathroom.jpg','bathroom');
new MallItem('./img/boots.jpg','boots')
new MallItem('./img/breakfast.jpg','breakfast');

console.log(leftItemThatIsOnThePage);

// ==================================
// Display the results
// ==================================

