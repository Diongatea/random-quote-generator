$(document).ready(function() {
  newQuote();
  $(".fade").hide(0).delay(500).fadeIn(2000);
    $(".newquote").click(function() {
    outFade();
    newQuote();
    inFade();
    });
    $(".tweet").click(function(){
    window.open("https://twitter.com/intent/tweet?text=" + string , "Twitter", "width=500,height=250");
    });
});

var string;
var author;
var quote;

function outFade() {
  $(".quote, .author").fadeOut();
}

function inFade() {
  $(".quote, .author").fadeIn();
}

function newQuote() {
    var url = $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data) {
        author = data.author;
        quote = data.quote;
        string = quote + " - " + author;
        $(".author").html("- " + author);
        $(".quote").html('<h3>"' + quote + '"<h3>');
    });
}
