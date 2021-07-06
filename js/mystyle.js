$(document).ready(function () {
    const card = document.querySelectorAll('.con>div');
    // console.log(card);

    // Setup our function to run on various events
    var someFunction = function (event) {
        // Do something...
        card.forEach((elm, idx) => {
            // 視窗高度 518-15=503
            // card[0].getBoundingClientRect().top = 
            // 424.0000305175781
            // 429.0000305175781

            var shoesTop = card[idx].getBoundingClientRect().top;
            // console.log(shoesTop);
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