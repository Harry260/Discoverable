if (!window.x) {
    x = {};
}

x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

var pageX;
var pageY;

$(document).ready(function() {

    $(document).bind("mouseup", function() {
        var selectedText = getFirstWord(x.Selector.getSelected() + ' s').trim();
        if(selectedText != ''){

            $( '#sel-txt' ).text(selectedText);
            
            $('ul.tools').css({
                'left': pageX + 5,
                'top' : pageY - 55
            }).fadeIn(200);
        } else {
            $('ul.tools').fadeOut(200);
        }
    });
    $(document).on("mousedown", function(e){
        pageX = e.pageX;
        pageY = e.pageY;
    });
    
});
