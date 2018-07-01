$(document).ready(function() { 
    $('#sizePicker').submit(function makeGrid(grid) {
        $('table tr').remove();
        let inputHe = $('#inputHeight').val();
        let inputWe = $('#inputWeight').val();
        for (var r = 1; r <= inputHe; r++){
            $('table').append('<tr></tr>');
            for (var c = 1; c <= inputWe; c++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
            }
        }
        grid.preventDefault();
        
        $('.cells').click(function(event) {
          var color = $('#colorPicker').val();
          $(event.target).css('background-color', color);
        });
    });              
});
