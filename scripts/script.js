// I broke this down into a few reusable functions in case functionality changes


/*
Main takeways include:
- removal of jQuery
- removal of IDs
- data attributes used to connect expanding panels to sections/toggle buttions
- BEM-lite classes
-- wasn't sure if you wanted them all converted
-- could be nice to use SCSS nesting, but not necessary
- animated using max-height since display: none; will cause "popping in" and can't be animated till in the DOM

Recommended:
- ditch material-design-icons and just use an SVG of the carat if that's all that it's used for
- change ".object" to ".toggle-object" or something that makes its function more clear
*/

// ## Older jQuery Code ##
// $(document).ready(function () {
//   $(".object--1").click(function() {
//     console.log('clicked');
//     $("#monthly-usage").toggleClass("show");
//     $("#monthly-usage").addClass('is-active');
//     $(".object--1 i ").toggleClass("rotate");
//   });
//   $(".object--2").click(function() {
//     console.log('clicked');
//     $("#monthly-summary").toggleClass("show");
//     $(".object--2 i ").toggleClass("rotate");
//   });
//   $(".object--3").click(function() {
//     console.log('clicked');
//     $("#payment-info").toggleClass("show");
//     $(".object--3 i ").toggleClass("rotate");
//   });
// });

// ## Vanilla JS ##
// get all the .objects into an array
const toggleObjectArray = document.querySelectorAll('.object');

// function to remove rotation from all
function removeRotate() {
  for (i=0; i < toggleObjectArray.length; i++ ) {
    toggleObjectArray[i].classList.remove('object--rotate')
  }
}

// function to hide all expanded panels
function hideExpandBox() {
  const panelArray = document.querySelectorAll('.expanding-panel');

  for (i=0; i < panelArray.length; i++ ) {
    panelArray[i].classList.remove('expanding-panel--show');
  }
}

// function to show the single active panel
function showExpandBox(activeSection) {
  document.querySelector(`.expanding-panel[data-expand="${activeSection}"]`).classList.add('expanding-panel--show');
}

// init function to bind click events
for (i=0; i < toggleObjectArray.length; i++ ) {
  toggleObjectArray[i].onclick = function(e) {
    // remove all expanded boxes if toggle object is clicked
    hideExpandBox();

    if (e.target.classList.contains('object--rotate')) {
      // if the target is already open, remove the rotation class and do nothing else
      removeRotate();
    } else {
      // if the target is not open, still remove rotation classes
      removeRotate();

      // then add the single instance of the rotation class
      e.target.classList.add('object--rotate');

      // and finally get the active section and expand the panel
      const activeSection = e.target.closest('.section').dataset.section;
      showExpandBox(activeSection);
    }
  }
}

//On click event:
//- check for the data attribute (data-bill)
//- clear "container--active" from all .container
//- add .container--active to the .container with the matching id to the data-bill 
