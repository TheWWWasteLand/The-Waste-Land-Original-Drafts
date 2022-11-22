/* keyboard shortcuts */
 
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    var key = e.keyCode.toString();  
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
      case '65':
        finalVer();
        break;
      case '84':
        singlePage();
        break;
      case '67':
        comparison();
        break;
      case '70':
        photo();
        break;
    }
};

function nextPage() {
  if (document.getElementsByClassName('activeFinalV').length > 0) {
   finalVer();
  }
  var i, iCont, one, two, three, four, five, six, seven, pageList, secList;
  i = document.getElementById('page-i');
  iCont = document.getElementById('page-i-content');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6');
  six = document.getElementById('page-7');
  seven = document.getElementById('page-8');
  pageList = document.getElementById('pageList');
  secList = document.getElementById('secList');
  const comparison = document.getElementById('singlePageDIV');
  const span = "      <span class='bolder'>+</span>";
  if (pageList.getAttribute("class") != "hidden") {
    pageList.classList.toggle('hidden');
  }
  if (secList.getAttribute("class") != "hidden") {
    secList.classList.toggle('hidden');
  }
  if (i.getAttribute('style') != "display: none;") {
    i.style.display="none";
    iCont.style.display="none";
    one.style.display="block";
    document.getElementById('prev').style.display="block";
    if (comparison) {
        nextComparison("#singlePageDIV #page-i", "#singlePageDIV #page-2");
    }
    var newString = "2" + span;
    document.getElementById("pageNumber").innerHTML = newString;
    var newString2 = "1. The Burial of the Dead               <span class='bolder'>+</span>"
    document.getElementById("sectionTitle").innerHTML = newString2;
  }
  else if (one.getAttribute('style') == "display: block;") {
    one.style.display="none";
    two.style.display="block";
    if (comparison) {
        nextComparison("#singlePageDIV #page-2", "#singlePageDIV #page-3");
    }
    var newString = "3" + span;
    document.getElementById("pageNumber").innerHTML = newString;
  }
  else if (two.getAttribute('style') == "display: block;") {
    two.style.display="none";
    three.style.display="block";
    if (comparison) {
        nextComparison("#singlePageDIV #page-3", "#singlePageDIV #page-4");
    }
    var newString = "4" + span;
    document.getElementById("pageNumber").innerHTML = newString;
  }
  else if (three.getAttribute('style') == "display: block;") {
    three.style.display="none";
    four.style.display="block";
    if (comparison) {
        nextComparison("#singlePageDIV #page-4", "#singlePageDIV #page-5");
    }
    var newString = "5" + span;
    document.getElementById("pageNumber").innerHTML = newString;
    var newString2 = "2. The Cage / A Game of Chess     <span class='bolder'>+</span>"
    document.getElementById("sectionTitle").innerHTML = newString2;
  }
  else if (four.getAttribute('style') == "display: block;") {
    four.style.display="none";
    five.style.display="block";
    if (comparison) {
        nextComparison("#singlePageDIV #page-5", "#singlePageDIV #page-6");
    }
    var newString = "6" + span;
    document.getElementById("pageNumber").innerHTML = newString;
  }
  else if (five.getAttribute('style') == "display: block;") {
    five.style.display="none";
    six.style.display="block";
    document.getElementById('next').style.display="none";
    if (comparison) {
        nextComparison("#singlePageDIV #page-6", "#singlePageDIV #page-7");
    }
    var newString = "7" + span;
    document.getElementById("pageNumber").innerHTML = newString;
  }
};

function prevPage() {
  var i, iCont, one, two, three, four, five, six, seven;
  i = document.getElementById('page-i');
  iCont = document.getElementById('page-i-content');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6');
  six = document.getElementById('page-7');
  seven = document.getElementById('page-8');
  const comparison = document.getElementById('singlePageDIV');
  const span = "      <span class='bolder'>+</span>";
  if (document.getElementsByClassName('activeFinalV').length > 0) {
   finalVer();
  }
  if (one.getAttribute('style') == "display: block;") {
    one.style.display="none";
    i.style.display="block";
    iCont.style.display="block";
    document.getElementById('prev').style.display="none";
    if (comparison) {
        prevComparison("#singlePageDIV #page-i", "#singlePageDIV #page-2");
    }
    var newString = "1" + span;
    document.getElementById("pageNumber").innerHTML = newString;
    var newString2 = "i. Title page                                     <span class='bolder'>+</span>"
    document.getElementById("sectionTitle").innerHTML = newString2;
    if (iCont.classList.contains('photoClass')) {
        iCont.style.display="none";
    }
    const compare = document.getElementById('singlePageDIV');
    if (compare) {
      iCont.style.display="block";
    }
  }
  else if (two.getAttribute('style') == "display: block;") {
    two.style.display="none";
    one.style.display="block";
    if (comparison) {
        prevComparison("#singlePageDIV #page-2", "#singlePageDIV #page-3");
    }
    var newString = "2" + span;
    document.getElementById("pageNumber").innerHTML = newString;
  }
  else if (three.getAttribute('style') == "display: block;") {
    three.style.display="none";
    two.style.display="block";
    if (comparison) {
        prevComparison("#singlePageDIV #page-3", "#singlePageDIV #page-4");
    }
    var newString = "3" + span;
    document.getElementById("pageNumber").innerHTML = newString;
  }
  else if (four.getAttribute('style') == "display: block;") {
    four.style.display="none";
    three.style.display="block";
    if (comparison) {
        prevComparison("#singlePageDIV #page-4", "#singlePageDIV #page-5");
    }
    var newString = "4" + span;
    document.getElementById("pageNumber").innerHTML = newString;
    var newString2 = "1. The Burial of the Dead               <span class='bolder'>+</span>"
    document.getElementById("sectionTitle").innerHTML = newString2;
  }
  else if (five.getAttribute('style') == "display: block;") {
    five.style.display="none";
    four.style.display="block";
    if (comparison) {
        prevComparison("#singlePageDIV #page-5", "#singlePageDIV #page-6");
    }
    var newString = "5" + span;
    document.getElementById("pageNumber").innerHTML = newString;
  }
  else if (six.getAttribute('style') == "display: block;") {
    six.style.display="none";
    five.style.display="block";
    document.getElementById('next').style.display="block";
    if (comparison) {
        prevComparison("#singlePageDIV #page-6", "#singlePageDIV #page-7");
    }
    var newString = "6" + span;
    document.getElementById("pageNumber").innerHTML = newString;
  }
};

function nextComparison(del, add) {
    $(del).hide();
    $(del).addClass('hidden');
    $(add).removeClass('hidden');
    $(add).show();
    $(add).css({"display": "block"});
}

function prevComparison(add, del) {
    $(del).hide();
    $(del).addClass('hidden');
    $(add).removeClass('hidden');
    $(add).show();
    $(add).css({"display": "block"});
}

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
    i.classList.toggle('activeFinalV');
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
    one.classList.toggle('activeFinalV');
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
    var element2 =  document.getElementById('pound-marks');
    if (element2) {
      element2.remove();
    }
    else {
      const marks = document.createElement("img");
      marks.setAttribute('src', 'https://thewwwasteland.github.io/The-Waste-Land-Original-Drafts/images/Pound-marks1.png');
      marks.setAttribute('id', 'pound-marks');
      document.getElementById('poemPage02').appendChild(marks);
    }
    note(document.getElementById('note-4'));
    two.classList.toggle('activeFinalV');
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
    three.classList.toggle('activeFinalV');
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
    four.classList.toggle('activeFinalV');
  }
  else if (five.getAttribute('style') == 'display: block;') {
    for (let i = 31; i < 39; i++) {
      additions(adds[i]);
    }
    for (let i = 49; i < 61; i++) {
      deletions(dels[i]);
    }
    for (let i = 35; i < 42; i++) {
      highlight(his[i]);
    }
    for (let i = 20; i < 33; i++) {
      note(notes[i]);
    }
    five.classList.toggle('activeFinalV');
  }
  else if (six.getAttribute('style') == 'display: block;') {
   for (let i = 61; i < 67; i++) {
      deletions(dels[i]);
   }
   for (let i = 39; i < 40; i++) {
      additions(adds[i]);
   }
   for (let i = 33; i < 35; i++) {
      note(notes[i]);
   }
  }
  six.classList.toggle('activeFinalV');
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
    el.classList.remove('line-del');
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

/*comparison*/

function comparison() {
    const single = $('#onlytextDIV').length;
    if (single > 0) {
        singlePage();
    }
    if ($("tei-lg").css("display") == "none") {
        photo();
    }
    const compare = $('#singlePageDIV').length;
    if (compare > 0) {
        $("tei-figure").show();
        $(".zoom-button").show();
        $('#singlePageDIV').remove();
        return false;
    }
    else {
        $("body").append("<div id='singlePageDIV'></div>");
        $("tei-figure").hide();
        $(".zoom-button").hide();
        const tei = $("tei-tei");
        tei.clone().appendTo("#singlePageDIV");
        const case1 = $("#singlePageDIV #hi-4 tei-l:first-child");
        var textCase1 = $("#singlePageDIV #hi-4 tei-l:first-child").html();
        var newTextCase1 = "          " + textCase1;
        case1.html(newTextCase1);
        $("#singlePageDIV tei-l").each(function(){
            $(this).removeAttr("n");
        });  
        $("#singlePageDIV #add-16").hide();
        $("#singlePageDIV #add-24").hide();
        $("#singlePageDIV #add-27").hide();
        $("#singlePageDIV #add-32").hide();
        $("#singlePageDIV #add-34").hide();
        $("#singlePageDIV tei-l span").hide();
        $("#singlePageDIV tei-del").remove();
        $("#singlePageDIV tei-add").each(function(){
        var parents = $(this).parents();
        parents.each(function(){
            if ($(this).prop("nodeName") == "TEI-L" || $(this).prop("nodeName") == "TEI-HEAD" || $(this).prop("nodeName") == "TEI-LG"  || $(this).prop("nodeName") == "TEI-P") {
                var adds = $(this).find("tei-add");
                adds.each(function(){
                    if ($(this).attr("cause") == "sign") {
                        $(this).hide();
                    }
                    else if ($(this).attr('id') != "add-16" && $(this).attr('id') != "add-24" && $(this).attr('id') != "add-27" && $(this).attr('id') != "add-32" && $(this).attr('xml:id') != "add-34") {
                        $(this).removeAttr("rend");
                        $(this).removeAttr("place");
                        $(this).attr("place", "inline");
                        $(this).css({"background-color": "#fcd2db", "display": "inline-block", "padding": "0px !important", "margin": "0 !important"});
                        $(this).removeClass("hidden");
                    }
                    if ($(this).attr('xml:id') == "add-38") {
                        $("#singlePageDiv #ref-1").remove();
                        var txt = $("#note-35").text();
                        var nTxt = txt.substring(57);
                        $(this).text(nTxt);
                        $(this).css({"white-space": "nowrap"});
                    }
                     
                });
                var htmlOriginal = $(this).html();
            }
        });
        $("#singlePageDIV tei-delSpan").each(function(){
          var x = $(this);
          var target = $(this).attr("spanTo");
          var siblings = $(this).nextAll();
          var a = 0;
          siblings.each(function() {
             if ($(this).attr('id') == target) {
               siblings.each(function() {
                   if ($(this).next().attr('id') == target) {
                       $(this).hide();
                       return false;
                   }
                   else if ($(this).next().attr('id') != target) {
                       $(this).hide();
                   }
               });
             }
             else {
                 siblings.each(function() {
                   if ($(this).find(target).length == 0) {
                       $(this).hide();
                   }
                   else if ($(this).find(target).length == 1) {
                       var newtarget = target.substring(1);
                       var string = '<tei-anchor xml:id="' + newtarget + '" id="' + newtarget + '" data-origname="anchor" data-empty="" data-processed="">';
                       var text = $(this).html();
                       var idx = text.indexOf(string);
                       var newString = text.substring(idx);
                       $(this).html(newString);
                       return false;
                   }
                 });
             }
          });
        });
    });
  }
}

/*reset*/

function reset() {
    const single = $('#onlytextDIV').length;
    if (single > 0) {
        singlePage();
    }
    const compare = $('#singlePageDIV').length;
    if (compare > 0) {
        comparison();
    }
    if ($("tei-lg").css('display') == "none") {
        photo();
    }
}
    


/* singlePage */

function singlePage() {
    const finalVersion = $('.activeFinalV');
    if (finalVersion.length > 0) {
        finalVer();
    }
    const compare = $('#singlePageDIV').length;
    if (compare > 0) {
        comparison();
    }
    if ($("tei-lg").css('display') == "none") {
        photo();
    }
    const single = $('#onlytextDIV').length;
    if (single > 0) {
        $("body > tei-tei").show();
        $(".zoom-button").show();
        $('#onlytextDIV').remove();
        $("#button-notes-list").show();
        document.getElementById('next').style.display="block";
        return false;
    }
    else {
        document.getElementById('next').style.display="none";
        $("body").append("<div id='onlytextDIV'></div>");
        const tei = $("tei-tei");
        tei.clone().appendTo("#onlytextDIV");
        const case1 = $("#onlytextDIV #hi-4 tei-l:first-child");
        var textCase1 = $("#onlytextDIV #hi-4 tei-l:first-child").html();
        var newTextCase1 = "          " + textCase1;
        case1.html(newTextCase1);
        $("body > tei-tei").hide();
        $("#onlytextDIV tei-l").each(function(){
            $(this).removeAttr("n");
        });  
        $("#onlytextDIV #add-16").hide();
        $("#onlytextDIV #add-24").hide();
        $("#onlytextDIV #add-27").hide();
        $("#onlytextDIV #add-32").hide();
        $("#onlytextDIV #add-34").hide();
        $("#onlytextDIV tei-l span").hide();
        $("#onlytextDIV tei-figure").hide();
        $(".zoom-button").hide();
        $("#onlytextDIV tei-titlepage > tei-div").css({"padding-left": "30vw"});
        $("#onlytextDIV tei-lg[type=poemPage]").css({"margin-left": "0px", "width": "calc(100% - 126px)", "padding-left": "25vw", "padding-right": "22vw", "height": "auto", "overflow":"auto", "-webkit-box-shadow": "2px 4px 4px 0px #999", "box-shadow":" 2px 4px 4px 0px #999"});
        $("#button-notes-list").hide();
        var x = 0;
        var list = [60, -30, 90, 105, 765, 650, 1140, 1190]; 
        $("#onlytextDIV tei-div").each(function(){
            var a = list[x];
            x = x + 1;
            var b = (a).toString() + "px" ;
            $(this).css({"display": "block", "height": "100%", "margin-top" : b});
            if (x == 8) {
                $(this).css({"padding-bottom": "295px"});
            }
        });
        $("#onlytextDIV tei-del").remove();
        $("#onlytextDIV tei-add").each(function(){
            var parents = $(this).parents();
            parents.each(function(){
                if ($(this).prop("nodeName") == "TEI-L" || $(this).prop("nodeName") == "TEI-HEAD" || $(this).prop("nodeName") == "TEI-LG"  || $(this).prop("nodeName") == "TEI-P") {
                    var adds = $(this).find("tei-add");
                    adds.each(function(){
                        if ($(this).attr("cause") == "sign") {
                            $(this).hide();
                        }
                        else if ($(this).attr('id') != "add-16" && $(this).attr('id') != "add-24" && $(this).attr('id') != "add-27" && $(this).attr('id') != "add-32" && $(this).attr('xml:id') != "add-34") {
                            $(this).removeAttr("rend");
                            $(this).removeAttr("place");
                            $(this).attr("place", "inline");
                            $(this).css({"background-color": "#fcd2db", "display": "inline-block", "padding": "0px !important", "margin": "0 !important"});
                            $(this).removeClass("hidden");
                        }
                        if ($(this).attr('xml:id') == "add-38") {
                            $("#singlePageDiv #ref-1").remove();
                            var txt = $("#note-35").text();
                            var nTxt = txt.substring(57);
                            $(this).text(nTxt);
                            $(this).css({"white-space": "nowrap"});
                        }
                    });
                    var htmlOriginal = $(this).html();
                }
        });
        $("#onlytextDIV tei-delSpan").each(function(){
          var x = $(this);
          var target = $(this).attr("spanTo");
          var siblings = $(this).nextAll();
          var a = 0;
          siblings.each(function() {
             if ($(this).attr('id') == target) {
               siblings.each(function() {
                   if ($(this).next().attr('id') == target) {
                       $(this).hide();
                       return false;
                   }
                   else if ($(this).next().attr('id') != target) {
                       $(this).hide();
                   }
               });
             }
             else {
                 siblings.each(function() {
                   if ($(this).find(target).length == 0) {
                       $(this).hide();
                   }
                   else if ($(this).find(target).length == 1) {
                       var newtarget = target.substring(1);
                       var string = '<tei-anchor xml:id="' + newtarget + '" id="' + newtarget + '" data-origname="anchor" data-empty="" data-processed="">';
                       var text = $(this).html();
                       var idx = text.indexOf(string);
                       var newString = text.substring(idx);
                       $(this).html(newString);
                       return false;
                   }
                 });
             }
          });
        });
        });
    }
}


/* photo only */ 
    
function photo() {
  const single = $('#onlytextDIV').length;
  if (single > 0) {
      singlePage();
  }
  const compare = $('#singlePageDIV').length;
  if (compare > 0) {
      comparison();
  }
  console.log($("tei-figure").css('display'));
  if ($("tei-lg").css('display') == "none") {
    $("tei-div tei-div").show();
    $("tei-lg").show();
    $("tei-quote").show();  
    $("tei-head").show();
    $("#button-notes-list").show();
    $("tei-figure").css({"width": "40vw"});
    $("#page-i-content").removeClass("photoClass");
    return false;
  }
  else {
    $("#page-i-content").addClass("photoClass");
    $("tei-div tei-div").hide();
    $("tei-lg").hide();
    $("tei-quote").hide();  
    $("tei-head").hide();
    $("#button-notes-list").hide();
    $("tei-figure").css({"width": "calc(100vw - 126px)"});
    return false;
  }
}
    
$(document).ready(function(){
  $("#imgOnly").click(function(){
      if (document.getElementsByClassName('activeFinalV').length > 0) {
       finalVer();
      }
      photo();
  });
  $("#compareTexts").click(function(){
      if (document.getElementsByClassName('activeFinalV').length > 0) {
       finalVer();
      }
      comparison();
      
  });
  $("#imgtext").click(function(){
      if (document.getElementsByClassName('activeFinalV').length > 0) {
       finalVer();
      }
      reset();
  });
  $("#textOnly").click(function(){
      if (document.getElementsByClassName('activeFinalV').length > 0) {
       finalVer();
      }
      singlePage();
  });
  $("#pageList li").click(function(){
      var number = $(this).text();
      console.log(number);
      var num = (parseInt(number) - 1);
      console.log(num);
      goToPage(num);
  });
  $("#secList li").click(function(){
      if ($(this).attr('id') == "section0") {
          goToPage(0);
          var newString = "i. Title page                                     <span class='bolder'>+</span>"
          $("#sectionTitle").html(newString);
      }
      else if ($(this).attr('id') == "section1"){
          goToPage(1);
          var newString = "1. The Burial of the Dead               <span class='bolder'>+</span>"
          $("#sectionTitle").html(newString);
      }
      else if ($(this).attr('id') == "section2") {
          goToPage(4);
          var newString = "2. The Cage / A Game of Chess     <span class='bolder'>+</span>"
          $("#sectionTitle").html(newString);
      }
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
          const text = document.createElement("DIV");
          var numeration = a + 1;
          text.innerHTML = numeration.toString();
          bg.appendChild(text);
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
    num = (parseInt(num) + 1).toString();
    if (document.getElementById("singlePageDIV")) {
      console.log("x");
      var x = getActivePage();
      if (num > x) {
        while (num > x) {
          nextPage();
          x = x + 1;
        }
      }
      else if (num < x) {
        while (num < x) {
          prevPage();
          x = x - 1;
        }
      }
      return false;
    }
    if (document.getElementsByClassName('activeFinalV').length > 0) {
     finalVer();
    }
    const span = "      <span class='bolder'>+</span>";
    var newString = num + span;
    document.getElementById("pageNumber").innerHTML = newString;
    if (num == 1) {
     goToPage("1");
     prevPage();
     document.getElementById("pageNumber").innerHTML = "1      <span class='bolder'>+</span>";
    }
    else {
      console.log(num);
      const pageList = document.getElementsByTagName('tei-div');
      for (let i = 0; i < pageList.length; i++) {
          var style = window.getComputedStyle(pageList[i]);
          var display = style.getPropertyValue('display');
          if (display == "block" && i != num) {
              pageList[i].style.display = "none";
          }
          if (i == num) {
              pageList[i].style.display = "block";
          }
      }
      if (num == 1) {
              document.getElementById('prev').style.display="none";
              pageList[0].display = "block";
      }
      else {
          document.getElementById('prev').style.display="block";
      }
      if (num == (pageList.length - 1)) {
          document.getElementById('next').style.display="none";
      }
      else {
          document.getElementById('next').style.display="block";
      }
    }
};
 
function getActivePage() {
    var divs = $("#singlePageDIV tei-div");
    var a = 0;
    divs.each(function(){
        console.log($(this).css("display"));
        if ($(this).css("display") != "block") {
            a = a + 1;
            console.log(a);
        }
        else if ($(this).css("display") == "block") {
            if (a == 0) {
             a = 1
            }
            return a
        }      
    }); 
}
 


    
        

    
      

