var hash = location.hash.substr(1);
var bucket;

const urlParams = new URLSearchParams(window.location.search);
const follow = urlParams.get('follow');
const cs = urlParams.get('theme');

var d = new Date();
var full_date = d.getFullYear();
var _month = d.getMonth() + 1;
var _date = d.getDate();



if(hash != ''){
    bucket = hash;
    fetchData()
}
else{
    bucket = _month + '/' + _date;
    fetchData()
}



function fetchData(){


    if(follow){

        if(follow === 'events'){
            fetchEvents();
        }
        else if(follow === 'births'){
            fetchBirths();
        }
        else if (follow === 'deaths'){
            fetchDeaths();
        }
        else{
            fetchEvents();
        }
    }
    else{
        fetchEvents();
    }
    
}


function fetchEvents(){
    $('#load-pane').fadeIn();
    fetch('https://byabbe.se/on-this-day/' + bucket +'/events.json')
    .then(response => response.json())
    .then(data => {
      dynamic(data.events)
    })
    $( '#app-bar-title' ).text('Discoverable | Events');

    $( '#deaths-btn' ).removeClass( 'active-topic' );
    $( '#births-btn' ).removeClass( 'active-topic' );
    $( '#events-btn' ).addClass( 'active-topic' );
}

function fetchBirths(){
    $('#load-pane').fadeIn();
    fetch('https://byabbe.se/on-this-day/' + bucket +'/births.json')
    .then(response => response.json())
    .then(data => {
      dynamic(data.births)
    })
    $( '#app-bar-title' ).text('Discoverable | Births');

    $( '#deaths-btn' ).removeClass( 'active-topic' );
    $( '#births-btn' ).addClass( 'active-topic' );
    $( '#events-btn' ).removeClass( 'active-topic' );

}

function fetchDeaths(){
    $('#load-pane').fadeIn();
    fetch('https://byabbe.se/on-this-day/' + bucket +'/deaths.json')
    .then(response => response.json())
    .then(data => {
      dynamic(data.deaths)
    })
    $( '#app-bar-title' ).text('Discoverable | Deaths');

    $( '#deaths-btn' ).addClass( 'active-topic' );
    $( '#births-btn' ).removeClass( 'active-topic' );
    $( '#events-btn' ).removeClass( 'active-topic' );

}


function dynamic(array){

    //try{

        const posts = Object.values(array).map(post => `

        <div class="story-card" id="story-${post.wikipedia[0].title.replace(/ /g, "-").replace(/,/g, "-")}">
        <div class="content-image" id="${post.wikipedia[0].title.replace(/ /g, "-").replace(/,/g, "-")}-image" ondblclick="fadeRemove(this);add_efect('story-${post.wikipedia[0].title.replace(/ /g, "-").replace(/,/g, "-")}', 'jello')">

        </div>
        <div class="text-content" ondblclick="fadeAdd('${post.wikipedia[0].title.replace(/ /g, "-").replace(/,/g, "-")}-image');">
            <h1 class="year-data">${post.year}<span class="yrs-ago">${full_date - post.year} Years ago<span></h1>
            <h2 class="story-abstract">${post.description}</h2>  
            <a class="wiki-btn" href="${post.wikipedia[0].wikipedia}">Wikipedia</a>     
        </div>
        </div>

      `)

        const exjs = Object.values(array).map(post => `
            set_image('${post.wikipedia[0].title.replace(/ /g, "-").replace(/,/g, "-")}','${post.wikipedia[0].title}' );

        `)

        if(posts.join('')){
            document.querySelector('#root').innerHTML = posts.join('');
        }else{
            alert('no-data')
        }

        var target = document.getElementById('script-root');
        var newScript = document.createElement("script");
        var inlineScript = document.createTextNode(exjs.join(''));
        newScript.appendChild(inlineScript); 
        target.appendChild(newScript);

               
        turnOutLoad();

    //}
    //catch(error){
     //   alert(error);
    //}
}

function set_image(element, search){
    
    let iurl = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&origin=*&piprop=original&titles=" + search;

    fetch(iurl).then(res => res.json()).then((jsondata) => {

        /* Parsing API Response*/
        var iresponse = JSON.stringify(jsondata, undefined, 2)
        var isuggestionData = JSON.parse(iresponse);
        var ipageid = Object.keys(isuggestionData.query.pages)[0];
        var src = isuggestionData.query.pages[ipageid].original.source;

        try {
            document.getElementById(element + '-image').style = "background-image: url(" + isuggestionData.query.pages[ipageid].original.source + ");";          
        } catch (error) {
            alert('err')
        }

        
    }).catch(err => { 
        $('#story-' + element).remove();
    });
}



function open_tut(view){
    if(view === 0){
        $( '.swipe-pane' ).css('display', 'none');
        $( '.tap-pane' ).css('display', 'block');
    }
    else{
        $( '.swipe-pane' ).css('display', 'block');
        $( '.tap-pane' ).css('display', 'none');
    }
    $( '.pop-layout' ).fadeIn();
}

function close_tut(){
    $('.pop-layout').fadeOut();
    Cookie.set('tut', 1, 365);
}

