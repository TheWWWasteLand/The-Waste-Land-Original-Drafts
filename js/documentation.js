$(document).ready(function(){
  $("#menu-left li").click(function(){
    var id = $(this).attr('id');
    var newId = id + "-div";
    var actualId = "#" + newId;
    $(".activeSec").addClass("hidden");
    $(".activeSec").removeClass("activeSec");
    $(actualId).removeClass('hidden');
    $(actualId).addClass('activeSec');
    $(".activatedLink").removeClass("activatedLink");
    $(this).addClass("activatedLink");
  });
});
