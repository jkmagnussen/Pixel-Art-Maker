// Select color input
// Select size input
var color
var width
var height
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event){
  event.preventDefault();
  width = $('#inputWidth').val();
  height = $('#inputHeight').val();
  makeGrid(height, width);
  console.log('Height: ' + height + ' and width: ' + width);
})

function makeGrid(a, b) {
  $('tr').remove();

  for (var x = 1; x <= a ; x++) {
    $('#pixelCanvas').append('<tr id=table' + x + '></tr>');
    for (var m = 1; m <= b; m++) {
      $('#table' + x).append('<td></td>');
    }
  }
  $('td').click(function addColor(){
    color = $('#colorPicker').val();
    if($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
// Your code goes here!
}
