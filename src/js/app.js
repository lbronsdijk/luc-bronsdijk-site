$(document).ready(function(){

    initQuotes();

    function initQuotes(){
        var quotesArray = [
            'I go by the<br/>name <strong>Luc</strong>',
            'I push code <br/>to <a href="https://github.com/lbronsdijk" target="_blank" alt="Spotify">GitHub</a>',
            'I do love <br/><a href="http://www.flickr.com/photos/lbronsdijk/sets/72157629787097051/" target="_blank">photography</a>',
            'I tweet on<br/><a href="https://twitter.com/lbronsdijk" target="_blank">Twitter</a>',
            'I am developer<br/> at <a href="http://www.angrybytes.nl/" target="_blank">Angry Bytes</a>',
            'I drop photos on <br/><a href="http://instagram.com/lbronsdijk" target="_blank" alt="Instagram">Instagram</a>',
            'I am good friends<br/>with <a href="http://www.apple.com/" target="_blank" alt="Apple">Apple</a>',
            'I drink<br/><a href="http://en.starbucks.nl/" target="_blank" alt="Starbucks">Starbucks</a> coffee',
            'I listen to the <br/>radiostation <a href="http://3fm.nl/" target="_blank" alt="3FM">3FM</a>',
            'I stream music <br/>from <a href="http://open.spotify.com/user/lbronsdijk" target="_blank" alt="Spotify">Spotify</a>'
        ];
        $('header').randomText( quotesArray, 5000 ); // ( array, interval, ["reload text or html"] )
    }
});

$.fn.randomText = function( quotesArray, interval, prevText ) {
    var obj = $(this);

    if ($('.quotes').length === 0) { 
        obj.append('<h1 class="quotes animated bounceInDown">'); 
    }

    var textCont = $('.quotes');

    textCont.fadeOut(0, function() {
        var chosenText = random_array(quotesArray);

        while( chosenText == prevText ) { 
            chosenText = random_array(quotesArray); 
        }

        textCont.empty().html(chosenText);
        textCont.fadeIn(0);
        sendText = chosenText;
    });

    timeOut = setTimeout(function(){ 
            obj.randomText(quotesArray, interval, sendText); 
        }, 
        interval 
    );
};

function random_array(aArray) {
    var rand = Math.floor( Math.random() * aArray.length + aArray.length );
    var randArray = aArray[ rand - aArray.length ];
    
    return randArray;
}
