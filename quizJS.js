var getScore = function(){
    var points=0;
    if(!document.getElementById('scoreNotSure').checked) {
        points++;
    }
    if(document.getElementById('bankROD').checked) {
        points++;
    }
    if(document.getElementById('loanUnion').checked) {
        points++;
    }
    if(document.getElementById('down5').checked) {
        points++;
    }
    if(document.getElementById('loanRate5').checked) {
        points++;
    }

    document.getElementById('quiz').style.display="none";
    document.getElementById('results').style.display="inline";
    if(points>3){
        document.getElementById('resultHigh').innerHTML="<h2> Congrats! You're a Money Mogul.</h2>" + "<p>Your Score: "+points+"</p>"+
         "<p> Enjoy your wealth of knowledge and help spread the financial awareness by sharing this quiz with friends!</p>" +
         "<a href=\"mailto:?subject=Come check out this cool quiz&amp;body=Check out this site quiz.html\" title=\"Share by Email\"> <img src=\"http://png-2.findicons.com/files/icons/573/must_have/48/mail.png\"></a>"  +
         "<a href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com\" target=\"_blank\" rel=\"noopener\"> <img src=\"fb.jpg\" width=\"50\" height=\"50\" alt=\"Share on Facebook\"> </a>";
    }
    else{
        document.getElementById('resultLow').innerHTML="<h2>Looks like you have more to learn. </h2>" +
        "<p> Click here to play our informative black jack game</p>" +
        "<button onclick=\"window.location.href = \'21.html\'\">Play</button>"
    }
    //set html element to visible and other one to invisible
}

window.onload= function(){
    document.getElementById('submit').onclick = getScore;
};