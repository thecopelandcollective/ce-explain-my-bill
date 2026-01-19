// I broke this down into a few reusable functions in case functionality changes


/*
Main takeways include:
- data attributes used to connect expanding panels to sections/toggle buttions
- BEM-lite classes
- animated using max-height since display: none; will cause "popping in" and can't be animated till in the DOM
*/

// ## Vanilla JS ##
// get all the .objects into an array
// const toggleObjectArray = document.querySelectorAll('.toggle-object'),
      toggleMenuArray = document.querySelectorAll('.menu-item');
      // toggleTopLayer = document.querySelectorAll('.col-6');

// function to remove rotation from all
// function removeRotate() {
//   for (i=0; i < toggleObjectArray.length; i++ ) {
//     toggleObjectArray[i].classList.remove('toggle-object--rotate');
//   }
// }
//
// function removeTopLayer() {
//     for(i=0; i < toggleTopLayer.length; i++) {
//         toggleTopLayer[i].classList.remove('top-layer');
//     }
// }
// function to hide all expanded panels
// function hideExpandBox() {
//   const panelArray = document.querySelectorAll('.expanding-panel');
//
//   for (i=0; i < panelArray.length; i++ ) {
//     panelArray[i].classList.remove('expanding-panel--show');
//   }
// }
//
// function hideHighlightedItem() {
//   const itemArray = document.querySelectorAll('.item');
//
//   for (i=0; i < itemArray.length; i++ ) {
//     itemArray[i].classList.remove('item--active');
//   }
// }

// function to show the single active panel
// function showExpandBox(activeSection) {
//     const panel = document.querySelector(`.expanding-panel[data-expand="${activeSection}"]`)
//     panel.classList.add('expanding-panel--show');
//     console.log(panel.parentNode);
//     panel.parentElement.classList.add('top-layer');
//     console.log(panel.previousElementSibling);
//     panel.previousElementSibling.querySelector('.item').classList.add('item--active');
// }

// init function to bind click events
// for (i=0; i < toggleObjectArray.length; i++ ) {
//   toggleObjectArray[i].onclick = function(e) {
//     // remove all expanded boxes if toggle object is clicked
//     hideExpandBox();
//     hideHighlightedItem();
//     removeTopLayer();
//
//     if (e.target.classList.contains('toggle-object--rotate')) {
//       // if the target is already open, remove the rotation class and do nothing else
//       removeRotate();
//     } else {
//       // if the target is not open, still remove rotation classes
//       removeRotate();
//
//       // then add the single instance of the rotation class
//       e.target.classList.add('toggle-object--rotate');
//
//       // and finally get the active section and expand the panel
//       const activeSection = e.target.closest('.section').dataset.section;
//       showExpandBox(activeSection);
//       }
//     }
// }


function hideBill() {
  const containerArray = document.querySelectorAll('.bill-paper');

  for (i=0; i < containerArray.length; i++ ) {
    containerArray[i].classList.remove('bill-paper--active');
  }
  for (i=0; i < toggleMenuArray.length; i++ ) {
    toggleMenuArray[i].classList.remove('menu-item--selected');
  }
}

function showBill(billType) {
    console.log(billType);
  document.getElementById(billType).classList.add('bill-paper--active');
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
