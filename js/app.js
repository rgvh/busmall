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
var imageOnPage =[];
var leftItemImg = document.getElementById('leftItemImg');
var leftItemH2 = document.getElementById('leftItemDesc');
var centerItemImg = document.getElementById('centerItemImg');
var centerItemImg = document.getElementById('centerItemDesc');
var rightItemImg = document.getElementById('rightItemImg');
var rightItemImg = document.getElementById('rightItemDesc');  
var leftItemThatIsOnThePage;
var centerItemThatIsOnThePage;
var rightItemThatIsOnThePage;

// imgOnPage.push(leftItemImg);



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

// var leftItemImg = document.getElementById('leftItemImg');
// var centerItemImg = document.getElementById('centerItemImg');
// var rightItemImg = document.getElementById('rightItemImg');

// var centerItemDiv = document.getElementById('centerItem');

// var rightItemDiv = document.getElementById('rightItem');

function handleClickOnLeftItem(event){
  console.log('clicked on left item');
  likeCounter++;
  leftItemThatIsOnThePage.clicks++;
  var leftItemIndex = Math.floor(Math.random() * allItems.length);
  leftItemThatIsOnThePage = allItems[leftItemIndex];
  leftItemImg.src = leftItemThatIsOnThePage.imageUrl;
  // Change h2 to match image
  leftItemH2.textContent = leftItemThatIsOnThePage.itemName;
  if(likeCounter > 5){
    leftItemImg.removeEventListener('click', handleClickOnLeftItem);
  }
}

leftItemImg.addEventListener('click', handleClickOnLeftItem);


// Set up temp variable to store newly selected picures
var tempLeft;
var tempCenter; 
var tempRight;

for (var i = 0; i < imageOnPage.length; i++){

}


// ==================================
// Instansiate the objects
// ================================== 

new MallItem('./img/bag.jpg','bag');
new MallItem('./img/banana.jpg','banana');
new MallItem('./img/bathroom.jpg','bathroom');
new MallItem('./img/boots.jpg','boots')
new MallItem('./img/breakfast.jpg','breakfast');
new MallItem('./img/bubblegum.jpg', 'bubblegum');
// new MallItem('./img/chair.jpg', 'chair');
// new MallItem('./img/cthulhu.jpg', 'cthulhu');
// new MallItem('./img/dog-duck.jpg', 'dog-duck');
// new MallItem('./img/dragon.jpg', 'dragon');
// new MallItem('./img/pen.jpg', 'pen');
// new MallItem('./img/pet-sweep.jpg', 'pet-sweep');
// new MallItem('./img/scissors.jpg', 'scissors');
// new MallItem('./img/shark.jpg', 'shark');
// new MallItem('./img/sweep.png', 'sweep');
// new MallItem('./img/tauntaun.jpg', 'tauntaun');
// new MallItem('./img/unicorn.jpg', 'unicorn');
// new MallItem('./img/usb.gif', 'usb');
// new MallItem('./img/water-can.jpg', 'water-can');
// new MallItem('./img/wine-glass.jpg', 'wine-glass');

console.log(leftItemThatIsOnThePage);


leftItemThatIsOnThePage = allItems[0];


// ==================================
// Display the results
// ==================================


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [7, 5, 3, 5, 12, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
