
/* we need to grab the values from the form, use them
   in the calculation, and then they need to be put
   back into the website */

function compute(){

  var pi = Math.PI; // of course pi gets its very own variable
  // 'option p' gives you π
  // X degrees to radians: X*π/180

  // these take the values from the form and assigns them to variables
  // the tangent function 'thinks' the degree value is in radians, so a conversion needs to happen

  // the "parseInt" is obselete when the form input is a number, but the code still works with it
  // it takes a number input, and parses it as a number, and gets (you guessed it) a number

  var FOV = (parseInt(document.querySelector("#FOV-input").value))*pi/180; // converts the input into radians
  var height = parseInt(document.querySelector("#height-input").value);
  var overlap = parseInt(document.querySelector("#overlap-input").value)/100; //  this works, but what I have done isn't so
                                                                              //  convenient when working with image sizes other than 3/4

  var imageSizeH = parseInt(document.querySelector("#aspectRatioH-input").value);
  var imageSizeW = parseInt(document.querySelector("#aspectRatioW-input").value);
  var imageSize = imageSizeH / imageSizeW;
  // fixed by adding separate image size height and width inputs, and the quotient of the two is assigned to the variable imageSize

  var units = document.querySelector("#units-input").value;

  // console.log(imageSize);
  // console.log(Math.tan(π/4));

  // Math.round() <- returns nearest integer
  // need to round the returned values

  var imageWidth = ((Math.tan(FOV/2)) * height) * 2;
  var imageHeight = imageWidth * imageSize;
  var imageHorOvlap = imageWidth * overlap;
  var imageVertOvlap = imageHeight * overlap;
  var imageHorLeft = imageWidth - imageHorOvlap;
  var imageVertLeft = imageHeight - imageVertOvlap;

  // this seems to be working fine

  document.querySelector("#FOV").innerHTML = FOV*180/pi + "˚";
  document.querySelector("#height").innerHTML = height + units;
  document.querySelector("#horizontal-coverage").innerHTML = Math.round(imageWidth) + units;
  document.querySelector("#vertical-coverage").innerHTML = Math.round(imageHeight) + units;
  document.querySelector("#horizontal-overlap").innerHTML = Math.round(imageHorOvlap) + units;
  document.querySelector("#vertical-overlap").innerHTML = Math.round(imageVertOvlap) + units;
  document.querySelector("#horizontal-left").innerHTML = Math.round(imageHorLeft) + units;
  document.querySelector("#vertical-left").innerHTML = Math.round(imageVertLeft) + units;

}
