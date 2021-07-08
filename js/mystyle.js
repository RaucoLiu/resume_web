$(document).ready(function () {

    // IE不支援 forEach | const | 箭頭函式 替代方案
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    var card = document.querySelectorAll('.con>div');

    // Setup our function to run on various events
    var someFunction = function (event) {
        card.forEach(function(elm, idx){

            var shoesTop = card[idx].getBoundingClientRect().top;
            
            if (shoesTop < document.documentElement.clientHeight - 200) {
                card[idx].classList.add('showup');
                $(card[idx]).find('.yellow_text').addClass('showup');
                $(card[idx]).find('span[class*="title"]').addClass('showup');
            } 
            // else {
                // card[idx].classList.remove("showup");
            // }
        })
    };


    // Add our event listeners
    window.addEventListener('scroll', someFunction, false);
    window.addEventListener('load', someFunction, false);
    window.addEventListener('change', someFunction, false);

})
