let cantadas

$.getJSON("../images/cantadas.json", function(data){
    cantadas = data["Cantadas"];
});

function Init(){
    $("#dice").click(() => {praseRandomize()});

   $(window).resize(() => {
        if($(window).width() < 500){
            $('#main>img').attr('src', '../images/pattern-divider-mobile.svg');
        }
        else{
            $('#main>img').attr('src', '../images/pattern-divider-desktop.svg');
        }
   })
}

function praseRandomize(){
    const dice = $("#dice"),
    number = $("#number"),
    text = $("#phrase")

    let randomNum = Math.floor(Math.random() * cantadas.length),
    getIndex = ("000" + (randomNum + 1)).slice(-3);

    dice.addClass("spin");
    number.text(`#${getIndex}`);
    text.html(cantadas[randomNum]["Cantada"])

    setTimeout(() => {
        dice.removeClass("spin");
    }, 2500);
}