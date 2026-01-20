// I broke this down into a few reusable functions in case functionality changes


/*
Main takeways include:
- data attributes used to connect expanding panels to sections/toggle buttions
- BEM-lite classes
- animated using max-height since display: none; will cause "popping in" and can't be animated till in the DOM
*/

// ## Vanilla JS ##

    const toggleMenuArray = document.querySelectorAll('.menu-item');



function hideBill() {
  const containerArray = document.querySelectorAll('.bill-wrapper');

  for (i=0; i < containerArray.length; i++ ) {
    containerArray[i].classList.remove('bill-wrapper--active');
  }
  for (i=0; i < toggleMenuArray.length; i++ ) {
    toggleMenuArray[i].classList.remove('menu-item--selected');
  }
}

function showBill(billType) {
    console.log(billType);
  document.getElementById(billType).classList.add('bill-wrapper--active');
}

for (i=0; i < toggleMenuArray.length; i++ ) {
  toggleMenuArray[i].onclick = function(e) {
      console.log(e.target);
      let billType = e.target.dataset.bill;

      hideBill();
      e.target.classList.add('menu-item--selected');
      showBill(billType);
  }
}




//On click event:
//- check for the data attribute (data-bill)
//- clear "container--active" from all .container
//- add .container--active to the .container with the matching id to the data-bill 
