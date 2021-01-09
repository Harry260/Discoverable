function selection(){
    if (window.getSelection)
           return window.getSelection();
}



function SetTextInfo(text){

    var apiUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=' + text;
    fetch(apiUrl).then(res => res.json()).then((jsondata) => {

        /* Parsing API Response*/
        var iresponse = JSON.stringify(jsondata, undefined, 2)
        var isuggestionData = JSON.parse(iresponse);
        var ipageid = Object.keys(isuggestionData.query.pages)[0];

        var data =  isuggestionData.query.pages[ipageid].extract;
        var title =  isuggestionData.query.pages[ipageid].title;


        if (typeof data === 'undefined'){
            alertPop('Couldn\'t get data')
        }
        else{
            try {
                asignData(title,data,SearchWiki(title))  
                GetImage(title);
            } catch (error) {
                console.log(error)
            }
        }




    }).catch(err => { 
        alertPop('Couldn\'t get data')
    });
}

function GetImage(search){

    let iurl = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&origin=*&piprop=original&titles=" + search;

    fetch(iurl).then(res => res.json()).then((jsondata) => {

        /* Parsing API Response*/
        var iresponse = JSON.stringify(jsondata, undefined, 2)
        var isuggestionData = JSON.parse(iresponse);
        var ipageid = Object.keys(isuggestionData.query.pages)[0];
        //console.log(ipageid);

        document.getElementById("thumbnail-ex").src = isuggestionData.query.pages[ipageid].original.source;
        openWindowPop()

    }).catch(err => {
        document.getElementById("thumbnail-ex").src = '';
        openWindowPop()
    });
}

function getFirstWord(string){
    return string.replace(/ .*/,'');
}

$( '#pop-click-ui' ).click(function(){
    var selectText = $( '#sel-txt' ).text();
    SetTextInfo(selectText)
})

function SearchWiki(search){
    return 'https://en.wikipedia.org/wiki/Special:Search?search=' + search;
}
