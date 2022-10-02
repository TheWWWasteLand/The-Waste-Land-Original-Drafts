window.onload = function() {
  const add = document.getElementsByTagName("tei-add");
  const note = document.getElementsByTagName("tei-note");
  for (let i = 0; i < add.length; i++) {
    add[i].classList.add('hidden');
    var strLength = 0.5 * (0 - add[i].innerText.length);
    var dist = strLength + 'em';
    console.log(dist);
    add[i].style.marginLeft = dist;
    console.log(add[i])
  }
  for (let a = 0; a < note.length; a++) {
    note[a].classList.add('hidden');
  }
  const line = document.getElementsByTagName("tei-l");
  for (let b = 0; b < line.length; b++) {
    if (line[b].hasAttribute("n")) {
      let span = line[b].children[1].innerHTML;
      let text = line[b].children[0].innerHTML;
      line[b].innerHTML = '<span>' + span + '</span>' + text;
    }
  }
};

/* keyboard - turning pages */

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
  var i, one, two, three, four, five, six, seven, pageList, secList;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6');
  six = document.getElementById('page-7');
  seven = document.getElementById('page-8');
  pageList = document.getElementById('pageList');
  secList = document.getElementById('secList');
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
  }
  else if (one.getAttribute('style') == "display: block;") {
    one.style.display="none";
    two.style.display="block";
  }
  else if (two.getAttribute('style') == "display: block;") {
    two.style.display="none";
    three.style.display="block";
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


/* show final version */


function finalVer() {
  var i, one, two, three, four, five, six;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6');
  six = document.getElementById('page-7');
  const dels = document.getElementsByTagName("tei-del");
  const adds = document.getElementsByTagName("tei-add");
  const his = document.getElementsByTagName("tei-hi");
  if (i.getAttribute('style') != "display: none;") {
    document.getElementById("add-i").classList.toggle('hidden');
    document.getElementById("TEswitch").style.display = 'inline-block' ;
  }
  else if (one.getAttribute('style') == "display: block;") {
    for (let i = 0; i < 13; i++) {
      dels[i].classList.toggle('line-del');
    }
    for (let i = 1; i < 12; i++) {
      adds[i].classList.toggle('hidden');
      if (adds[i].getAttribute('place') == "above") {
        if (adds[i].parentNode.nodeName == "TEI-L") {
          adds[i].parentNode.classList.toggle('interline');
        }
        else if (adds[i].parentNode.parentNode.nodeName == "TEI-L") {
          adds[i].parentNode.parentNode.classList.toggle('interline');
        }
        else if (adds[i].parentNode.parentNode.nodeName == "TEI-L") {
          adds[i].parentNode.parentNode.parentNode.classList.toggle('interline');
        }
        else if (adds[i].parentNode.parentNode.parentNode.nodeName == "TEI-L") {
          adds[i].parentNode.parentNode.parentNode.classList.toggle('interline');
        }
      }
    }
    document.getElementById('hi-1').classList.toggle('highlight');
    document.getElementById('stanza01').classList.toggle('total-del');
    document.getElementById('note-1').classList.toggle('hidden');
    document.getElementById('note-2').classList.toggle('hidden');
    document.getElementById('note-3').classList.toggle('hidden');
  }
  else if (two.getAttribute('style') == "display: block;") {
    for (let i = 1; i < 6; i++) {
      if (his[i].getAttribute('rend') == 'circled' || his[i].getAttribute('rend') == 'circledExceptAbove') {
        his[i].classList.toggle('highlight');
      }
      else if (his[i].getAttribute('rend') == 'underline') {
        his[i].classList.toggle('underline');
      }
    }
    for (let i = 12; i < 17; i++) {
      dels[i].classList.toggle('line-del');
      if (dels[i].getAttribute('rend') == "central-deletion") {
        dels[i].classList.toogle('line-del');
        dels[i].classList.toggle('central-del');
      }
    }
    for (let i = 12; i < 15; i++) {
      adds[i].classList.toggle('hidden');
      if (adds[i].getAttribute('place') == "above") {
        if (adds[i].parentNode.nodeName == "TEI-L") {
          adds[i].parentNode.classList.toggle('interline');
        }
        else if (adds[i].parentNode.parentNode.nodeName == "TEI-L") {
          adds[i].parentNode.parentNode.classList.toggle('interline');
        }
      }
    }
    var element =  document.getElementById('back-1');
    if (element) {
      element.remove();
    }
    else {
      const arrow = document.createElement("img");
      arrow.setAttribute('src', 'https://thewwwasteland.github.io/The-Waste-Land-Original-Drafts/images/arrow1.png');
      arrow.setAttribute('id', 'back-1');
      document.getElementById('poemPage02').appendChild(arrow);
    }
    var element2 =  document.getElementById('marks-1');
    if (element2) {
      element2.remove();
    }
    else {
      const PoundMarks1 = document.createElement("img");
      PoundMarks1.setAttribute('src', 'https://thewwwasteland.github.io/The-Waste-Land-Original-Drafts/images/Pound-marks1.png');
      PoundMarks1.setAttribute('id', 'marks-1');
      document.getElementById('poemPage02').appendChild(PoundMarks1);
    }
    document.getElementById('note-4').classList.toggle('hidden');
  }
  else if (three.getAttribute('style') == "display: block;") {
    for (let i = 15; i < 25; i++) {
      adds[i].classList.toggle('hidden');
    }
    for (let i = 6; i < 14; i++) {
      if (his[i].getAttribute('rend') == 'circled' || his[i].getAttribute('rend') == 'circledExceptLeft' || his[i].getAttribute('rend') == 'circledExceptRight') {
        his[i].classList.toggle('highlight');
      }
      else if (his[i].getAttribute('rend') == 'underline') {
        his[i].classList.toggle('underline');
      }
      else if (his[i].getAttribute('rend') == 'squared') {
        his[i].classList.toggle('squared');
      } 
    }
    for (let i = 17; i < 27; i++) {
      dels[i].classList.toggle('line-del');
    }
    document.getElementById('note-5').classList.toggle('hidden');
    document.getElementById('note-6').classList.toggle('hidden');
    document.getElementById('note-7').classList.toggle('hidden');
  }
  else if (four.getAttribute('style') == "display: block;") {
  }
  else if (five.getAttribute('style') == 'display: block;') {
  }
  else if (six.getAttribute('style') == 'display: block;') {
  }
};

/* sections and pages menu */

function sec() {
  document.getElementById('secList').classList.toggle('hidden');
};
function page() {
  document.getElementById('pageList').classList.toggle('hidden');
};

/* shows/hides T. Eliot notes */

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

/* jQuery */

$(document).ready(function(){
  $("#finalV").click(function(){
    $(".switch").show();
  });
  $("#textOnly").click(function(){
    $("tei-figure").hide();
    $(".zoom-button").hide();
    $("[type=poemPage]").css({"margin-left": "12vw", "overflow": "auto"});
    $("#button-notes-list").css({"left": "26px", "width": "calc(100vw - 130px)"});
  });
});

/* zoom */

function zoomin() {
  const figures = document.getElementsByTagName("tei-graphic");
  for (let i = 0; i < 8; i++) {
    var img = figures[i].childNodes[0];
    var style = window.getComputedStyle(img);
    var width = style.getPropertyValue('max-width');
    if (width != '300%') {
      var value = parseInt(width);
      var newDim = value + 50;
      var finalValue = newDim + '%'
      img.style.maxWidth = finalValue;
      img.style.maxHeight = finalValue;
    }
  }
}
      
function zoomout () {
  const figures = document.getElementsByTagName("tei-graphic");
  for (let i = 0; i < 8; i++) {
    var img = figures[i].childNodes[0];
    var style = window.getComputedStyle(img);
    var width = style.getPropertyValue('max-width');
    if (width != '100%') {
      var value = parseInt(width);
      var newDim = value - 50;
      var finalValue = newDim + '%'
      img.style.maxWidth = finalValue;
      img.style.maxHeight = finalValue;
    }
  }
}
  
    
  
