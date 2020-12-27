var light_back = 'rgb(255, 255, 255)';
var light_over = 'rgb(255, 255, 255)';
var light_text_head = 'black'
var light_text_sub = 'grey'
var ligh_card_shadow = '1px 39px 121px -19px rgba(0,0,0,0.21)';

var dark_back = '#07060b'
var dark_over = '#17141d';
var dark_text_head = 'white'
var dark_text_sub = '#7a7a8c'
var dark_card_shadow = '-1rem 0 3rem #000'


function themeDark(){
    $( 'body' ).css({
        "background-color": dark_back
    })

    $( '.story-card' ).css({
        "background-color": dark_over,
        "box-shadow": dark_card_shadow
    })

    $( '.text-content' ).css({
        "background-color": dark_over
    })

    $( '#app-bar-title, .year-data' ).css({
        "color": dark_text_head
    })

    $( '.story-abstract' ).css({
        "color": dark_text_sub
    })

    $( '.bottom_nav nav a' ).css({
        "color": dark_text_head
    })

    $( '.active-topic' ).attr({
        "style": ''
    })
}

function themeLight(){
    $( 'body' ).attr("style", "")

    $( '.story-card' ).attr("style", "")

    $( '.text-content' ).attr("style", "")

    $( '#app-bar-title, .year-data' ).attr("style", "")

    $( '.story-abstract' ).attr("style", "")

    $( '.bottom_nav nav a' ).attr('style', '')
}

function setTheme(){
    if(Cookie.get('tut') === 'undefined'){
        open_tut(0);
    }
    if(cs){
        if(cs === 'dark'){
            themeDark();
        }
        else if(cs === 'light'){
            themeLight();
        }
        else{
            themeLight();
        }
    }
    else{
        themeLight();
    }
}
