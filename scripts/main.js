let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/3x.gif') {
      myImage.setAttribute('src','images/3x2.gif');
    } else {
      myImage.setAttribute('src','images/3x.gif');
    }
}