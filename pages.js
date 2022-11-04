document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.opacity = "0.2";
        document.querySelector(
          ".loader").style.visibility = "visible";
    } else {
        document.querySelector(
          ".loader").style.display = "none";
        document.querySelector(
          "body").classList.add("loaded");
    }
};


window.onload = function() {
  const add = document.getElementsByTagName("tei-add");
  const notes = document.getElementsByTagName("tei-note");
  const graphs = document.getElementsByTagName("tei-graphic");
  for (let g = 0; g < graphs.length; g++) {
    if (graphs[g].parentNode.nodeName != "TEI-FIGURE") {
      graphs[g].classList.add('hidden');
    }
  }
  for (let i = 0; i < add.length; i++) {
    add[i].classList.add('hidden');
    if (add[i].getAttribute('place') == 'above' || add[i].getAttribute('place') == 'doubleAbove') {
      var strLength = add[i].innerText.length;
      if (strLength == 1) {
        var newLength = 0.55;
      }
      else if (strLength > 1 && strLength < 4) {
        var newLength = 0.6 * strLength;
        var padd = '1.3em';
      }
      else if (strLength > 3 && strLength < 7) {
        var newLength = 0.55 * strLength;
        var padd = '0.5em'; 
      }
      else if (strLength > 6 && strLength < 11) {
        var newLength = 0.5 * strLength;
        var padd = '1em';
      }
      else if (strLength > 10 && strLength < 17) {
        var newLength = 0.4 * strLength;
        var padd = '0.8em';
      }
      else if (strLength > 16) {
        var newLength = 0.35 * strLength;
        var padd = '0.7em';
      }
      var finalLength = 0 - newLength;
      var dist = finalLength + 'em';
      add[i].style.marginLeft = dist;
      add[i].style.paddingRight = padd;
    }
    else if (add[i].hasAttribute('rend')) {
      var strLength = add[i].innerText.length;
      var regex = /\d+/g;
      if (add[i].getAttribute('place') == 'margin-left' || add[i].getAttribute('place') == 'margin-left below' || add[i].getAttribute('place') == 'margin-left above') {
        var chs = parseInt(add[i].getAttribute('rend').match(regex));
        var marginleft = (0 - ((strLength + chs) * 0.53)) + 'em';
        var paddright = ((chs * 0.53) + 0.5) + 'em';
        if (strLength == 1) {
          marginleft = (0 - ((strLength + chs) * 0.6)) + 'em';
          paddright = ((chs * 0.6) + 0.5) + 'em';
        }
        if (add[i].getAttribute('place').includes('below')) {
          paddright = ((strLength + chs) * 0.53) + 'em';
        }
        if (add[i].getAttribute('rend').includes('diagonal')) {
          var marginbottom = (0 - ((strLength + chs) * 0.53 / 0.82 * 0.5736)) + 'em';
          var lineheight = (((strLength + chs) * 0.53 / 0.82 * 0.5736) + 1.5) + 'em';
          paddright = (((chs + strLength) * 0.6)) + 'em';
          marginleft = (0 - ((strLength + chs) * 0.6)) + 'em';
          add[i].style.marginBottom = marginbottom;
          add[i].style.lineHeight = lineheight;
        }
        add[i].style.marginLeft = marginleft;
        add[i].style.paddingRight = paddright;
        if (add[i].getAttribute('rend').includes('linking-line')) {
          var prevSpace = "";
          if (add[i].getAttribute('rend').includes('diagonal')) {
            chs = chs / 0.82;
          }
          for (let i = 0; i < (1.5 * chs); i++) {
            prevSpace = prevSpace + " ";
          }
          add[i].setAttribute('data-before', prevSpace);
        }
      }
      else if (add[i].getAttribute('place') == 'footer') {
        var distBelow = (parseInt(add[i].getAttribute('rend').match(regex)) * 1.5) + 'em';
        add[i].style.top = distBelow;
        var distLeft = strLength * 0.53;
        add[i].style.left = (0 - distLeft / 2) + 'em';
        add[i].style.marginRight = (0 - distLeft) + 'em';
        if (add[i].getAttribute('rend').includes('diagonal')) {
        }
      }
    }   
  }
  for (let a = 0; a < notes.length; a++) {
    notes[a].classList.add('hidden');
    if (notes[a].hasAttribute('rend')) {
      if (notes[a].getAttribute('rend').includes("linkingStar")) {
        var strLength = notes[a].innerText.length;
        var databefore = "";
        var c = 0
        while (c < strLength) {
          databefore = databefore + " ";
          c = c + 1;
        }
        databefore = databefore + "X";
        notes[a].setAttribute('data-before', databefore);
      }
    }
  }
  const line = document.getElementsByTagName("tei-l");
  for (let b = 0; b < line.length; b++) {
    if (line[b].hasAttribute("n")) {
      let span = line[b].children[1].innerHTML;
      let text = line[b].children[0].innerHTML;
      if (parseInt(line[b].getAttribute('n')) >= 100) {
        line[b].innerHTML = '<span style="margin-left : -5.5em">' + span + '</span>' + text;
      }
      else {
        line[b].innerHTML = '<span>' + span + '</span>' + text;
      }
    }
  }
};

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
        break;
      case '70':
        finalVer();
        break;
      case '80':
        singlePage();
        break;
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
    document.getElementById('next').style.display="none";
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
    document.getElementById('next').style.display="block";
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
    i.classList.toggle('finalActivation');
    if (i.getAttribute('class').includes('finalActivation')) {
      document.getElementById("TEswitch").style.display = 'inline-block' ;
    }
    else {
      document.getElementById("TEswitch").style.display = 'none' ;
    } 
  }
  else if (one.getAttribute('style') == "display: block;") {
    document.getElementById("TEswitch").style.display = 'inline-block' ;
    document.getElementsByClassName('blue')[0].style.display="none";
    document.getElementsByClassName('green')[0].style.display="none";
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
    document.getElementById("TEswitch").style.display = 'inline-block' ;
    document.getElementById("EPswitch").style.display = 'inline-block' ;
    document.getElementsByClassName('green')[0].style.display="none";
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
    for (let i = 18; i < 35; i++) {
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
    for (let i = 31; i < 39; i++) {
      additions(adds[i]);
    }
    for (let i = 49; i < 64; i++) {
      deletions(dels[i]);
    }
    for (let i = 35; i < 42; i++) {
      highlight(his[i]);
    }
    for (let i = 20; i < 34; i++) {
      note(notes[i]);
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
  else if (el.getAttribute('rend') == 'doubleUnderline') {
    el.classList.toggle('doubleUnderline');
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
    document.getElementById("TEswitch").style.display = 'inline-block' ;
    finalVer();
  }
  else if (one.getAttribute('style') != "display: none;") {
    finalVer();
  }
};  


/* singlePage */

function singlePage() {
    $("tei-figure").hide();
    $(".zoom-button").hide();
    $("[type=poemPage]").css({"margin-left": "0px", "width": "calc(100% - 126px)", "padding-left": "300px", "height": "auto", "overflow":"auto", "-webkit-box-shadow": "2px 4px 4px 0px #999", "box-shadow":" 2px 4px 4px 0px #999"});
    $("#button-notes-list").css({"left": "65.5px", "width": "calc(100vw - 124.5px)"});
    var x = 0;
    var list = [60, 80, 1265, 1215, 700, 1140, 1200]; 
    $("tei-div").each(function(){
        var a = list[x];
        x = x + 1;
        var b = (a).toString() + "px" ;
        $(this).css({"display": "block", "height": "100%", "margin-top" : b});
        if (x == 7) {
            $(this).css({"padding-bottom": "295px"});
        }
    });
}

/* text only */

$(document).ready(function(){
  $("#textOnly").click(function(){
    $("tei-figure").hide();
    $(".zoom-button").hide();
    $("[type=poemPage]").css({"margin-left": "0px", "width": "calc(100% - 126px)", "padding-left": "300px"});
    $("#button-notes-list").css({"left": "65.5px", "width": "calc(100vw - 124.5px)"});
    $("tei-note").each(function(){
      var x = $(this).css("left");
      if ($(this).parent().attr('id') == 'poemPage05') {
          var leftPx = "calc(120px + " + x + ")";
      }
      else {
          var leftPx = "calc(190px + " + x + ")";
      }
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
  
/*thumbnails*/

function thumbs() {
    const bg = document.getElementsByClassName('zoom-button')[0];
    const zoomIn = document.getElementsByClassName('zoom-in')[0];
    const zoomOut = document.getElementsByClassName('zoomout')[0];
    if (document.getElementsByClassName('thumbnail').length == 0) {
        bg.style.backgroundColor = 'rgba(69, 80, 95, 0.9)';
        bg.style.overflow = 'auto';
        const figures = document.getElementsByTagName("tei-graphic");
        var arr = []
        for (let i = 0; i < figures.length; i++) {
          if (figures[i].hasAttribute("type")) {
            var img = figures[i].childNodes[0];
            arr.push(img);
          }
        }
        for (let a = 0; a < arr.length; a++) {
          var image = document.createElement("img");
          var url = arr[a].getAttribute('src');
          var id = "thumb-" + a.toString();
          image.setAttribute('src', url);
          image.setAttribute('id', id);
          image.onclick = (function (el) {
                return function () {
                    thumbSearch(this);
                };
            })(this);

          image.classList.add('thumbnail');
          bg.appendChild(image);
        }
        zoomOut.style.display = 'none';
        zoomIn.style.display = 'none';
        
    }
    else {
        const thumbs = document.getElementsByClassName('thumbnail');
        while (thumbs.length > 0) {
            bg.removeChild(thumbs[0]);
        }
        bg.style.backgroundColor = 'rgba(69, 80, 95, 0)';
        zoomOut.style.display = 'inline-block';
        zoomIn.style.display = 'inline-block';
    }
}

function thumbSearch(el) {
      var id = el.getAttribute('id');
      var reg = /\d+/;
      var n = (id.match(reg))[0].toString();
      goToPage(n);
}

function goToPage(num) {
    const pageList = document.getElementsByTagName('tei-div');
    for (let i = 0; i < pageList.length; i++) {
        var style = window.getComputedStyle(pageList[i]);
        var display = style.getPropertyValue('display');
        if (display == "block" && i != num) {
            pageList[i].style.display == "none !important";
            console.log(pageList[i]);
            console.log("done");
        }
        if (i == num) {
            pageList[i].style.display == "block !important";
            console.log(pageList[i]);
            console.log("me");
        }    
    }
}
    
        

    
      

