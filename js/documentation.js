$(document).ready(function{
  $("#menu-left li").click(function{
    $(".activeSec").hide();
    var id = $(this).attr('id');
    console.log(id);
    var newId = id + "-div";
    console.log(newId);
  });
});
