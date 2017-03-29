var offset = 50;
var offset2 = 0;

$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

$('#Buttons2').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset2);
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$('body').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$('body').scrollspy({ target: '.spy-desactive' });