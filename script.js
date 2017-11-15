$('img').hover(increaseSize, returnToOriginalSize);

function increaseSize() {
    $(this).css({height: '+=10%', width: '+=10%'});
}
function returnToOriginalSize() {
    $(this).css({height: "", width: ""});
}