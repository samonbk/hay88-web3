

var show = document.getElementById('show');
var show_list = document.getElementById('show-list');

$(document).ready(function(){
    $("#show").click(function(){
      $("#show-list").toggle();
    });
  });