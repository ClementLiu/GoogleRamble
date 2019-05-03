chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            // test
            // chrome.runtime.sendMessage({ "message": "open_new_tab" });
            var fruits = [];
            var delay = 1000;
            // for (var i = 0; i < $("body").children().length - 1; i++) {
            //     // console.log($("body").children()[i]);
            //     fruits.push($("body").children().eq(i));
            // }
            // for (var i = 0; i < $("body").children().children().length - 1; i++) {
            //     // console.log($("body").children().children()[i]);
            //     fruits.push($("body").children().children().eq(i));
            // }
            for (var i = 0; i < $("body").children().children().children().children().length - 1; i++) {
                // console.log($("body").children().children().children()[i]);
                fruits.push($("body").children().children().children().children().eq(i));
            }
            for (var i = 0; i < $("#search").children().children().children().children().children().children().length - 1; i++) {
                // console.log($("body").children().children().children()[i]);
                fruits.push($("#search").children().children().children().children().children().children().eq(i));
            }
            addHideElement(".r");
            addHideElement(".st"); 
            addHideElement(".osl");
            addHideElement(".related-question-pair");
            // for (var i = 0; i < $(".r").length - 1; i++) {
            //     // console.log($("body").children().children().children()[i]);
            //     fruits.push($(".r").eq(i));
            // }
            // for (var i = 0; i < $(".st").length - 1; i++) {
            //     // console.log($("body").children().children().children()[i]);
            //     fruits.push($(".st").eq(i));
            // }
            // for (var i = 0; i < $(".osl").length - 1; i++) {
            //     // console.log($("body").children().children().children()[i]);
            //     fruits.push($(".osl").eq(i));
            // }
            // fruits.reverse();
            for (var i = fruits.length - 1; i >= 0; i--) {
                // fruits[i].hide();
                fruits[i].fadeOut(1);;
                // setTimeout(function(){fruits[4].hide()}, 2000);
                // setTimeout(hide(), 2000, fruits[4]);
                // setTimeout(function() { fruits[i].hide(); }, 3000);
            }

            // for (var i = fruits.length - 1; i >= 0; i--) {
            for (var i = 0; i < fruits.length; i++) {
                // fruits[i].hide();
                // setTimeout(function(){fruits[4].hide()}, 2000);
                setTimeout(hideObject, (delay+1000) * (i + 1), i);
                // setTimeout(hide(), delay0, fruits[4]);
                // setTimeout(function() { fruits[i].hide(); }, 3000);

            }

            function hideObject(number) {
                // fruits[number].show();
                fruits[number].show(delay);
                $('html, body').animate({
                    scrollTop: (fruits[number].offset().top - 100)
                    // scrollLeft: (fruits[number].offset().left - 200)
                }, delay);
                // fruits[number].focus();
                console.log(fruits[number]);
            }

            function addHideElement(className) {
                for (var i = 0; i < $(className).length - 1; i++) {
                    // console.log($("body").children().children().children()[i]);
                    fruits.push($(className).eq(i));
                }
            }
            // var firstHref = $("a[href^='http']").eq(0).attr("href");

            // console.log(firstHref);
            // chrome.runtime.sendMessage({ "message": "open_new_tab", "url": "https://www.google.com/search?source=hp&ei=8U0SXI6TF5GQjgTVoYiwCw&q=test&btnK=Google+Search&oq=test&gs_l=psy-ab.3..0l7j0i131j0l2.1586.1804..1984...0.0..0.146.467.0j4......0....1..gws-wiz.....0.lCAfS56-WO0" });
        }
    }
);