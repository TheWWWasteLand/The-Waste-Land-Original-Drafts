/* keyboard shortcuts */
 
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    var key = e.keyCode.toString();  
    console.log(key);
    switch (key) {
      case '39':
        nextPage();
        break;
      case '37':
        prevPage();
        break;
      case '38':
        zoomin();
        break;
      case '40':
        zoomout();
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
  const graphs = document.getElementsByTagName("tei-graphic");
  const notes = document.getElementsByTagName("tei-note");
  if (i.getAttribute('style') != "display: none;") {
    additions(document.getElementById("add-i"));
    document.getElementById("TEswitch").style.display = 'inline-block' ;
  }
  else if (one.getAttribute('style') == "display: block;") {
    for (let i = 0; i < 13; i++) {
      deletions(dels[i]);
    }
    for (let i = 1; i < 12; i++) {
      additions(adds[i]); 
    }
    highlight(document.getElementById('hi-1'));
    document.getElementById('stanza01').classList.toggle('total-del');
    for (let i = 0; i < 3; i++) {
      note(notes[i]);
    }
  }
  else if (two.getAttribute('style') == "display: block;") {
    for (let i = 1; i < 6; i++) {
      highlight(his[i]);
    }
    for (let i = 12; i < 17; i++) {
      deletions(dels[i]);
    }
    for (let i = 12; i < 15; i++) {
      additions(adds[i]);
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
    note(document.getElementById('note-4'));
  }
  else if (three.getAttribute('style') == "display: block;") {
    for (let i = 15; i < 26; i++) {
      additions(adds[i]);
    }
    for (let i = 5; i < 18; i++) {
      highlight(his[i]);
    }
    for (let i = 17; i < 29; i++) {
      deletions(dels[i]);
    }
    for (let i = 4; i < 7; i++) {
      note(notes[i]);
    }
    var a = 0
    for (let g = 0; g < graphs.length; g++) {
      if (graphs[g].parentNode.nodeName != "TEI-FIGURE") {
        if (a < 3) {
          graphs[g].classList.toggle('hidden');
          a = a + 1;
        }
      } 
    }
  }
  else if (four.getAttribute('style') == "display: block;") {
    for (let i = 26; i < 31; i++) {
      additions(adds[i]);
    }
    for (let i = 29; i < 49; i++) {
      deletions(dels[i]);
    }
    for (let i = 18; i < 33; i++) {
      highlight(his[i]);
    }
    for (let i = 7; i < 20; i++) {
      note(notes[i]);
    }
    var a = 0
    for (let g = 0; g < graphs.length; g++) {
      if (graphs[g].parentNode.nodeName != "TEI-FIGURE") {        
        if (a > 2 && a < 9) {
          graphs[g].classList.toggle('hidden');
        }
        a = a + 1;
      } 
    }
  }
  else if (five.getAttribute('style') == 'display: block;') {
    for (let i = 31; i < 40; i++) {
      additions(adds[i]);
    }
    for (let i = 49; i < 55; i++) {
      deletions(dels[i]);
    }
    for (let i = 33; i < 35; i++) {
      highlight(his[i]);
    }
  }
  else if (six.getAttribute('style') == 'display: block;') {
  }
};

/* tei-add */

function additions(el) {
  el.classList.toggle('hidden');
  if (el.getAttribute('place') == "above") {
    if (el.parentNode.nodeName == "TEI-L") {
      el.parentNode.classList.toggle('interline');
    }
    else if (el.parentNode.parentNode.nodeName == "TEI-L") {
      el.parentNode.parentNode.classList.toggle('interline');
    }
    else if (el.parentNode.parentNode.nodeName == "TEI-L") {
      el.parentNode.parentNode.parentNode.classList.toggle('interline');
    }
    else if (el.parentNode.parentNode.parentNode.nodeName == "TEI-L") {
      el.parentNode.parentNode.parentNode.classList.toggle('interline');
    }
  }
}

/* tei-del */

function deletions(el) {
  el.classList.toggle('line-del');
  if (el.getAttribute('rend') == "central-deletion") {
    el.classList.toggle('line-del');
    el.classList.toggle('central-del');
  }
}

/* tei-note */ 

function note(el) {
  el.classList.toggle('hidden');
}

/* te-hi */ 

function highlight(el) {
  if (el.getAttribute('rend') == 'circled' || el.getAttribute('rend') == 'circledExceptLeft' || el.getAttribute('rend') == 'circledExceptRight' || el.getAttribute('rend') == 'circledExceptAbove' || el.getAttribute('rend') == 'circledExceptBelow') {
    el.classList.toggle('highlight');
  }
  else if (el.getAttribute('rend') == 'underline') {
    el.classList.toggle('underline');
  }
  else if (el.getAttribute('rend') == 'squared') {
    el.classList.toggle('squared');
  }
  else if (el.getAttribute('rend') == 'squaredExceptAbove' || el.getAttribute('rend') == 'squaredExceptLeft' || el.getAttribute('rend') == 'squaredExceptRight') {
    el.classList.toggle(el.getAttribute('rend'));
  }   
  else if (el.getAttribute('rend') == 'borderRight') {
    el.classList.toggle('rightBorder');
  }
  else if (el.getAttribute('rend') == 'squared underline') {
    el.classList.toggle('underline');
    el.classList.toggle('squared');
  }
}

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
    $("[type=poemPage]").css({"margin-left": "0px", "width": "calc(100% - 126px)", "padding-left": "300px"});
    $("#button-notes-list").css({"left": "65.5px", "width": "calc(100vw - 124.5px)"});
    $("tei-note").each(function(){
      var x = $(this).css("left");
      var leftPx = "calc(190px + " + x + ")";
      $(this).css({"left": leftPx});
    });
  });
});

/* zoom */

function zoomin() {
  const figures = document.getElementsByTagName("tei-graphic");
  var a = 0
  for (let i = 0; i < figures.length; i++) {
    if (figures[i].hasAttribute("type")) {
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
}
      
function zoomout () {
  const figures = document.getElementsByTagName("tei-graphic");
  for (let i = 0; i < figures.length; i++) {
    if (figures[i].hasAttribute("type")) {
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
}
  
    

