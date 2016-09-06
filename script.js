var main = function() {

    $('form').submit(function(event) {
        var $input = $(event.target).find('input');
        var comment = $input.val();

        if (comment != "") {
            var html = $('<li>').text(comment);
            html.prependTo('#comments');
            $input.val("");
        }

        return false;
    });

}

$(document).ready(main);

var myName = "ming lam";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();
