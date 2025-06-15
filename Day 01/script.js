// Select all divs with class 'color-box'
const boxes = document.querySelectorAll('.color-box');

// Select the button element
const button = document.getElementById('colorButton');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Loop through each box and change its background color
  boxes.forEach((box, index) => {
    // Remove all classes from the box
    box.classList.remove('blue', 'red', 'green');
    
    // Set a new color based on index
    if (index === 0) {
      box.classList.add('blue');
    } else if (index === 1) {
      box.classList.add('red');
    } else {
      box.classList.add('green');
    }
  });
});
