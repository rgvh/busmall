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

var totalClicks = 0;
var allItems = [];
// var imageOnPage =[];
// var leftItemThatIsOnThePage;
// var centerItemThatIsOnThePage;
// var rightItemThatIsOnThePage;



// DOM references

var leftItemImg = document.getElementById('leftItemImg');
var leftItemH2 = document.getElementById('leftItemDesc');
var centerItemImg = document.getElementById('centerItemImg');
var centerItemH2 = document.getElementById('centerItemDesc');
var rightItemImg = document.getElementById('rightItemImg');
var rightItemH2 = document.getElementById('rightItemDesc');
var imageSection = document.getElementById('sampleProducts');


// imgOnPage.push(leftItemImg);



// ==================================
// Constructors
// ==================================

// Creates BusMall object and pushes it to the allItems array

function MallItem(url, name){
  this.imageUrl = url;
  this.itemName = name;
  this.clickCount = 0;
  this.appeared = 0;

  allItems.push(this);
}


console.log(allItems);

// ==================================
// Instansiate the objects
// ==================================

new MallItem('img/bag.jpg','bag');
new MallItem('img/banana.jpg','banana');
new MallItem('img/bathroom.jpg','bathroom');
new MallItem('img/boots.jpg','boots');
new MallItem('img/breakfast.jpg','breakfast');
new MallItem('img/bubblegum.jpg', 'bubblegum');
new MallItem('./img/chair.jpg', 'chair');
new MallItem('./img/cthulhu.jpg', 'cthulhu');
new MallItem('./img/dog-duck.jpg', 'dog-duck');
new MallItem('./img/dragon.jpg', 'dragon');
new MallItem('./img/pen.jpg', 'pen');
new MallItem('./img/pet-sweep.jpg', 'pet-sweep');
new MallItem('./img/scissors.jpg', 'scissors');
new MallItem('./img/shark.jpg', 'shark');
new MallItem('./img/sweep.png', 'sweep');
new MallItem('./img/tauntaun.jpg', 'tauntaun');
new MallItem('./img/unicorn.jpg', 'unicorn');
new MallItem('./img/usb.gif', 'usb');
new MallItem('./img/water-can.jpg', 'water-can');
new MallItem('./img/wine-glass.jpg', 'wine-glass');

// console.log(leftItemThatIsOnThePage);
// leftItemThatIsOnThePage = allItems[0];

// ==================================
// Initialize the page
// ==================================

// Randomly select three images
// Store the index of the items put on the page
// Keep track of the times an item appears
// Change the DOM
// limit number of times images can be clicked
// TODO Prevent duplicate images
// TODO Select all new images for next click
// TODO Store results
// TODO Display results in a chart
// TODO Persist results in local storage

function pickImageAndIncrementAppeared() {
  var leftItemIndex = Math.floor(Math.random() * allItems.length);
  var centerItemIndex = Math.floor(Math.random() * allItems.length);
  var rightItemIndex = Math.floor(Math.random() * allItems.length);

  console.log(leftItemIndex);

  allItems[centerItemIndex].appeared++;
  allItems[leftItemIndex].appeared++;
  allItems[rightItemIndex].appeared++;

  console.log(allItems);

  leftItemImg.src = allItems[leftItemIndex].imageUrl;
  leftItemH2.textContent = allItems[leftItemIndex].itemName;
  centerItemImg.src = allItems[centerItemIndex].imageUrl;
  centerItemH2.textContent = allItems[centerItemIndex].itemName;
  rightItemImg.src = allItems[rightItemIndex].imageUrl;
  rightItemH2.textContent = allItems[rightItemIndex].itemName;
}


// refactoring for event delegation
// function handleClickOnLeftItem(event){
//   console.log('clicked on left item');
//   likeCounter++;
//   leftItemThatIsOnThePage.clicks++;
//   leftItemThatIsOnThePage = allItems[leftItemIndex];
//   leftItemImg.src = leftItemThatIsOnThePage.imageUrl;
//   // Change h2 to match image
//   leftItemH2.textContent = leftItemThatIsOnThePage.itemName;
//   if(likeCounter > 5){
//     leftItemImg.removeEventListener('click', handleClickOnLeftItem);
//   }
// }

// leftItemImg.addEventListener('click', handleClickOnLeftItem);


// Set up temp variable to store newly selected picures
// var tempLeft;
// var tempCenter;
// var tempRight;

// for (var i = 0; i < imageOnPage.length; i++){

// }
function handleClickOnImage (clickEvent){
  if(event.target.tagName !== 'IMG'){
    console.log('click on an image');
    return;
  }

  totalClicks++;

  for(var i = 0; i < allItems.length; i++){
    console.log(event.target);
    console.log('allItems[i]');
    console.log(allItems[i].imageUrl);
    if(event.target.src.includes(allItems[i].imageUrl)){
      console.log(`${allItems[i].itemName} was picked`);
      allItems[i].clickCount++;
    }
  }



  pickImageAndIncrementAppeared();
  if (totalClicks > 24){
    imageSection.removeEventListener('click', handleClickOnImage);
    // console.log('clicked on item');
    buildMyChart();
  }
}



// ===================================
// Display the results
// ==================================

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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

pickImageAndIncrementAppeared();

imageSection.addEventListener('click', handleClickOnImage);
