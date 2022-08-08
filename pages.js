window.onload = function() {
  const add = document.getElementsByTagName("tei-add");
  const note = document.getElementsByTagName("tei-note")
  for (let i = 0; i < add.length; i++) {
    add[i].classList.add('hidden');
  }
  for (let a = 0; a < note.length; a++) {
    note[a].classList.add('hidden');
  }
};

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '39') {
        nextPage();
    }
    else if (e.keyCode == '37') {
        prevPage();
    }
};

function nextPage() {
  var i, one, two, three, four, five, six, seven, autList, pageList, secList;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6');
  six = document.getElementById('page-7');
  seven = document.getElementById('page-8');
  autList = document.getElementById('selectAuthors');
  pageList = document.getElementById('pageList');
  secList = document.getElementById('secList')
  if (autList.getAttribute("class") != "hidden") {
    autList.classList.toggle('hidden');
  }
  if (pageList.getAttribute("class") != "hidden") {
    pageList.classList.toggle('hidden');
  }
  if (secList.getAttribute("class") != "hidden") {
    secList.classList.toggle('hidden');
  }
  if (i.getAttribute('style') != "display: none;") {
    i.style.display="none";
    one.style.display="block";
    document.getElementById('prev').style.display="block";
    document.getElementById('add-4').classList.add('hidden');
  }
  else if (one.getAttribute('style') == "display: block;") {
    one.style.display="none";
    two.style.display="block";
  }
  else if (two.getAttribute('style') == "display: block;") {
    two.style.display="none";
    three.style.display="block";
    document.getElementById("back-1").classList.add('hidden');
  }
  else if (three.getAttribute('style') == "display: block;") {
    three.style.display="none";
    four.style.display="block";
    document.getElementById('carbonCopy').classList.toggle('hidden');
  }
  else if (four.getAttribute('style') == "display: block;") {
    four.style.display="none";
    five.style.display="block";
  }
  else if (five.getAttribute('style') == "display: block;") {
    five.style.display="none";
    six.style.display="block";
  }
  else if (six.getAttribute('style') == "display: block;") {
    six.style.display="none";
    seven.style.display="block";
  }
};

function prevPage() {
  var i, one, two, three, four, five, six, seven;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6');
  six = document.getElementById('page-7');
  seven = document.getElementById('page-8');
  if (one.getAttribute('style') == "display: block;") {
    one.style.display="none";
    i.style.display="block";
    document.getElementById('prev').style.display="none";
  }
  else if (two.getAttribute('style') == "display: block;") {
    two.style.display="none";
    one.style.display="block";
    document.getElementById("back-1").classList.add('hidden');
  }
  else if (three.getAttribute('style') == "display: block;") {
    three.style.display="none";
    two.style.display="block";
  }
  else if (four.getAttribute('style') == "display: block;") {
    four.style.display="none";
    three.style.display="block";
  }
  else if (five.getAttribute('style') == "display: block;") {
    five.style.display="none";
    four.style.display="block";
  }
  else if (six.getAttribute('style') == "display: block;") {
    six.style.display="none";
    five.style.display="block";
  }
  else if (seven.getAttribute('style') == "display: block;") {
    seven.style.display="none";
    six.style.display="block";
  }
};

function finalVer() {
  var i, one, two, three;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  document.getElementById('selectAuthors').classList.remove('hidden');
  if (i.getAttribute('style') != "display: none;") {
    document.getElementById("add-i").classList.toggle('hidden');
  }
  else if (one.getAttribute('style') == "display: block;") {
    document.getElementById('lg-1').classList.toggle('highlight');
    document.getElementById('add-1').classList.toggle('hidden');
    document.getElementById('add-2a').classList.toggle('hidden');
    document.getElementById('add-2b').classList.toggle('hidden');
    document.getElementById('add-2c').classList.toggle('hidden');
    document.getElementById('add-3').classList.toggle('hidden');
    document.getElementById('add-4').classList.toggle('hidden');
    document.getElementById('rdg-2').classList.toggle('total-del');
    document.getElementById('del-4').classList.toggle('line-del');
    document.getElementById('del-5').classList.toggle('line-del');
    document.getElementById('del-6a').classList.toggle('line-del'); 
    document.getElementById('del-6b').classList.toggle('line-del');        
    document.getElementById('del-6c').classList.toggle('line-del');        
    document.getElementById('del-6d').classList.toggle('line-del');        
    document.getElementById('del-7a').classList.toggle('line-del');
    document.getElementById('del-7b').classList.toggle('line-del');
    document.getElementById('del-9').classList.toggle('line-del');
    document.getElementById('del-8a').classList.toggle('line-del');
    document.getElementById('del-8b').classList.toggle('line-del');
    document.getElementById('del-10').classList.toggle('line-del');
    document.getElementById('del-11').classList.toggle('line-del');
    document.getElementById('note-1').classList.toggle('hidden');
    document.getElementById('note-2').classList.toggle('hidden');
    document.getElementById('note-3').classList.toggle('hidden');
    document.getElementById('note-4').classList.toggle('hidden');
  }
  else if (two.getAttribute('style') == "display: block;") {
    const arrow = document.createElement("img");
    arrow.setAttribute('src', 'https://thewwwasteland.github.io/images/arrow1.png');
    arrow.setAttribute('id', 'back-1');
    document.body.appendChild(arrow);
    document.getElementById('rdg-12').classList.toggle('highlightPound');
    document.getElementById('rdg-13').classList.toggle('highlightPound');
    document.getElementById('lg-2').classList.toggle('highlight');
    document.getElementById('add-5').classList.toggle('hidden');
    document.getElementById('del-12').classList.toggle('line-del');
    document.getElementById('under-1a').classList.toggle('underline');
    document.getElementById('under-1b').classList.toggle('underline');
    document.getElementById('del-13').classList.toggle('line-del'); 
    document.getElementById('del-14').classList.toggle('line-del');
    document.getElementById('del-15').classList.toggle('line-del');
    document.getElementById('note-5').classList.toggle('hidden');
  }
  else if (three.getAttribute('style') == "display: block;") {
    const pound1 = document.createElement("img"), pound2 = document.createElement("img"), pound3 = document.createElement("img"), teliot1 = document.createElement("img"), teliot2 = document.createElement("img");
    pound1.setAttribute('src', 'https://thewwwasteland.github.io/images/pound1.png');
    pound1.setAttribute('id', 'pound-1');
    document.body.appendChild(pound1);
    pound2.setAttribute('src', 'https://thewwwasteland.github.io/images/pound2.png');
    pound2.setAttribute('id', 'pound-2');
    document.body.appendChild(pound2);
    pound3.setAttribute('src', 'https://thewwwasteland.github.io/images/pound2.png');
    pound3.setAttribute('id', 'pound-3');
    document.body.appendChild(pound3);
    teliot1.setAttribute('src', 'https://thewwwasteland.github.io/images/TEliot1.png');
    teliot1.setAttribute('id', 'teliot-1');
    document.body.appendChild(teliot1);
    teliot2.setAttribute('src', 'https://thewwwasteland.github.io/images/TEliot1.png');
    teliot2.setAttribute('id', 'teliot-2');
    teliot2.setAttribute('class', 'diagonal');
    document.body.appendChild(teliot2);
    document.getElementById('add-7').classList.toggle('hidden');
    document.getElementById('del-16').classList.toggle('line-del');
    document.getElementById('del-17').classList.toggle('line-del');
    document.getElementById('del-18a').classList.toggle('line-del');
    document.getElementById('del-18b').classList.toggle('line-del');
    document.getElementById('del-19a').classList.toggle('line-del');
    document.getElementById('del-19b').classList.toggle('line-del');
    document.getElementById('del-19c').classList.toggle('line-del');
    document.getElementById('del-20').classList.toggle('line-del');
    document.getElementById('del-21a').classList.toggle('line-del');
    document.getElementById('del-21b').classList.toggle('line-del');
    document.getElementById('del-22a').classList.toggle('line-del');
    document.getElementById('del-22b').classList.toggle('line-del');
    document.getElementById('del-23').classList.toggle('line-del');
    document.getElementById('add-10a').classList.toggle('hidden');  
    document.getElementById('add-10b').classList.toggle('hidden');  
    document.getElementById('add-10c').classList.toggle('hidden');  
    document.getElementById('add-8').classList.toggle('hidden'); 
    document.getElementById('add-9').classList.toggle('hidden'); 
    document.getElementById('add-11').classList.toggle('hidden');  
    document.getElementById('add-11').classList.toggle('diagonal');  
    document.getElementById('add-12a').classList.toggle('hidden');  
    document.getElementById('add-12b').classList.toggle('hidden');  
    document.getElementById('add-13').classList.toggle('hidden');  
    document.getElementById('rdg-20').classList.toggle('highlightPound');
    document.getElementById('rdg-19').classList.toggle('highlight');
    document.getElementById('rdg-23').classList.toggle('highlightPound');
    document.getElementById('note-7').classList.toggle('hidden');
    document.getElementById('note-8').classList.toggle('hidden');
    document.getElementById('note-7').classList.toggle('diagonal');
    document.getElementById('note-7').classList.toggle('highlightPound');
    document.getElementById('note-8').classList.toggle('diagonal');
    document.getElementById('note-9').classList.toggle('hidden');
    document.getElementById('under-3').classList.toggle('underline');
    document.getElementById('under-4a').classList.toggle('underline');
    document.getElementById('under-4b').classList.toggle('underline');
    document.getElementById('under-4c').classList.toggle('underline');
  }
  else if (four.getAttribute('style') == "display: block;") {
    document.getElementById('del-24').classList.toggle('line-del');
    document.getElementById('del-25').classList.toggle('line-del');
    document.getElementById('del-26').classList.toggle('line-del');
    document.getElementById('del-27').classList.toggle('line-del');
    document.getElementById('del-28').classList.toggle('line-del');
    document.getElementById('del-29').classList.toggle('line-del');
    document.getElementById('del-30').classList.toggle('line-del');
    document.getElementById('del-31a').classList.toggle('line-del');
    document.getElementById('del-31b').classList.toggle('line-del');
    document.getElementById('del-31c').classList.toggle('line-del');
    document.getElementById('del-32').classList.toggle('line-del');
    document.getElementById('del-33').classList.toggle('line-del');
    document.getElementById('del-34a').classList.toggle('line-del');
    document.getElementById('del-34b').classList.toggle('line-del');
    document.getElementById('del-35').classList.toggle('line-del');
    document.getElementById('del-36').classList.toggle('line-del');
    document.getElementById('del-37').classList.toggle('line-del');
    document.getElementById('del-38').classList.toggle('line-del');
    document.getElementById('del-39').classList.toggle('line-del');
    document.getElementById('highlight-1').classList.toggle('highlightPound');   
    document.getElementById('highlight-2a').classList.toggle('highlightPound');
    document.getElementById('highlight-2b').classList.toggle('highlightPound');
    document.getElementById('highlight-2c').classList.toggle('highlightPound');
    document.getElementById('highlight-3').classList.toggle('highlightPound');
    document.getElementById('highlight-4').classList.toggle('highlightPound');
    document.getElementById('highlight-5').classList.toggle('highlightPound');
    document.getElementById('highlight-6').classList.toggle('highlightPound');
    document.getElementById('add-14').classList.toggle('hidden');
    document.getElementById('add-15').classList.toggle('hidden');
    document.getElementById('add-16').classList.toggle('hidden');
    document.getElementById('note-10').classList.toggle('hidden');
    const pound4 = document.createElement("img"), teliot3 = document.createElement('img');
    pound4.setAttribute('src', 'https://thewwwasteland.github.io/images/Pound3.png');
    pound4.setAttribute('id', 'pound-4');
    document.body.appendChild(pound4);
    teliot3.setAttribute('src', 'https://thewwwasteland.github.io/images/TEliot3.png');
    teliot3.setAttribute('id', 'teliot-3');
    document.body.appendChild(teliot3);
  }
};

function closeList() {
  document.getElementById('selectAutList').classList.toggle('hidden');
};

function lens() {
  var i, one, two, three;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4')
  if (i.getAttribute('style') != "display: none;") {
    magnify('page-i-pic', 3);
  }
  else if (one.getAttribute('style') == "display: block;") {
    magnify('page-1-pic', 3);
  }
  else if (two.getAttribute('style') == "display: block;") {
    magnify('page-2-pic', 3);
  }
  else if (three.getAttribute('style') == "display: block;") {
    magnify('page-3-pic', 3);
  }
};

function sec() {
  document.getElementById('secList').classList.toggle('hidden');
};
function page() {
  document.getElementById('pageList').classList.toggle('hidden');
};

function TEliot() {
  var i, one, two, three, four, five;;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6')
  if (i.getAttribute('style') != "display: none;") {
    document.getElementById("add-i").classList.toggle('hidden');
  }
  else if (one.getAttribute('style') != "display: none;") {
    finalVer();
  }
};  

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - 1100 - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
