$( '#overlay-pop' ).click(function() {
    $( '#pop-lay' ).fadeOut();
    $( '#overlay-pop' ).fadeOut();
})

$( '.exit-pop' ).click(function() {
    $( '#ex-overlay' ).fadeOut();
    $( '#ex-pop' ).fadeOut();
})

$( '.close-more-content' ).click(function(){
    $( '.more-over-window' ).fadeOut();
})

$( '#open-menu' ).click(function() {
    $( '#pop-lay' ).fadeIn();
    $( '#overlay-pop' ).fadeIn('fast');
})

$( '#ex-overlay' ).click(function(){
    $( '#ex-overlay' ).fadeOut();
    $( '#ex-pop' ).fadeOut();
})



function openWindowPop() {
    $( '#ex-overlay' ).fadeIn();
    $( '#ex-pop' ).fadeIn();
}

$( '.more-opt' ).click(function(){
    $( '.more-over-window' ).fadeIn();
})

function asignData(Title, Content, WikiLink){
    
    $( '#root-ex-prew' ).text(Content);
    $( '#root-ex-content' ).text(Content);

    $( '#root-title-prev' ).text(Title);
    $( '#root-title-content' ).text(Title);

    $( '.wiki-link' ).attr('href',  WikiLink);
}

function alertPop(Message){

    $( '#alert-pop-text h5' ).text(Message);
    $( '#alert-pop-text' ).fadeIn();

    setTimeout(function(){ 
        $( '#alert-pop-text' ).fadeOut(200);
    }, 3000);
}
