//Function for images on main page
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/work3.jpg') {
      myImage.setAttribute ('src','images/work2.jpg');
    } else {
      myImage.setAttribute ('src','images/work3.jpg');
    }
  }
  // Button
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');
  
  //Button function
  function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hey how was your day, ' + myName;
    if(!localStorage.getItem('name')) {
      setUserName();
    } else {
      var storedName = localStorage.getItem('name');
      myHeading.textContent = 'Hey how was your day, ' + storedName;
    }
    
  }
  myButton.onclick = function() {
    setUserName();
  }