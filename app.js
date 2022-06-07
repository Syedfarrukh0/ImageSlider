
// Decleared the variables

let slide = document.getElementsByClassName('slide');
let l_arrow = document.getElementsByClassName('left');
let r_arrow = document.getElementsByClassName('right');

// Decleared the variable for showslides

let passslides = 0;

// creat function of onclick to control the slides with arrow 

function controller(x) {
    passslides = passslides + x;
    showslider();
}

// creat the function to show the slides

function showslider() { 
    
  // Apply if to set the slider after last slides
    
    if (passslides == slide.length) {
        passslides = 0;
    }

  // Again apply if to set the slider before first slides  

    if (passslides < 0) {
        passslides = slide.length-1;
    }

  // Apply forOf loop to hide the all slides

    for (let y of slide) {
        y.style.display = 'none';
    }
    
  // Display current slides

    slide[passslides].style.display = 'block';
}

// call the fuction of slide show

showslider();