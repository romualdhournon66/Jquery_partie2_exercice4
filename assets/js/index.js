$(function() {
  $('#green').click(function(){
    $('#text').css('color','green');
  });
  $('#red').click(function(){
    $('#text').css('color','red');
  });
  $('#blue').click(function(){
    $('#text').css('color','blue');
  });
});



$('.color').click(function(event){
  divColor=$(this).attr('id');
$('#text').css('color',divColor);
});
