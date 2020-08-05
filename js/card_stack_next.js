$(document).ready(function() {

    var content1 = $('.content1');
    var currentItem1 = content1.filter('.active');
    var steps = $('.card').filter('.steps');
    var inactive1 = $('.inactive-11');
    var inactive2 = $('.inactive-12');

    var content2 = $('.content2');
    var currentItem2 = content2.filter('.active');
    var inactive3 = $('.inactive-21');
    var inactive4 = $('.inactive-22');

    var content3 = $('.content3');
    var currentItem3 = content3.filter('.active');
    var inactive5 = $('.inactive-31');
    var inactive6 = $('.inactive-32');

    $('.button1').click(function() {
        var nextItem = currentItem1.next();
        var lastItem = content1.last();
        var contentFirst = content1.first();

        currentItem1.removeClass('active');

        if (currentItem1.is(lastItem)) {
            currentItem1 = contentFirst.addClass('active');
            currentItem1.css({'right': '10%', 'opacity': '1'});
            $('.step1').animate({width: '33%'});
            inactive1.animate({height: '8px', marginLeft:'20px', marginRight:'20px'}, 100);
            inactive2.animate({height: '8px', marginLeft:'10px', marginRight:'10px'}, 100);

       } else if (currentItem1.is(contentFirst)) {
            currentItem1.animate({opacity: 0}, 1000);
            currentItem1 = nextItem.addClass('active');
            $('.step1').animate({width: '66%'});
            inactive2.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);

        } else {
            currentItem1 = nextItem.addClass('active');
            $('.step1').animate({width: '100%'});
            inactive1.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
        }
    });

    $('.button2').click(function() {
        var nextItem = currentItem2.next();
        var lastItem = content2.last();
        var contentFirst = content2.first();

        currentItem2.removeClass('active');

        if (currentItem2.is(lastItem)) {
            currentItem2 = contentFirst.addClass('active');
            currentItem2.css({'right': '10%', 'opacity': '1'});
            $('.step2').animate({width: '33%'});
            inactive3.animate({height: '8px', marginLeft:'20px', marginRight:'20px'}, 100);
            inactive4.animate({height: '8px', marginLeft:'10px', marginRight:'10px'}, 100);

       } else if (currentItem2.is(contentFirst)) {
            currentItem2.animate({opacity: 0}, 1000);
            currentItem2 = nextItem.addClass('active');
            $('.step2').animate({width: '66%'});
            inactive4.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);

        } else {
            currentItem2 = nextItem.addClass('active');
            $('.step2').animate({width: '100%'});
            inactive3.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
        }
    });

    $('.button3').click(function() {
        var nextItem = currentItem3.next();
        var lastItem = content3.last();
        var contentFirst = content3.first();

        currentItem3.removeClass('active');

        if (currentItem3.is(lastItem)) {
            currentItem3 = contentFirst.addClass('active');
            currentItem3.css({'right': '10%', 'opacity': '1'});
            $('.step3').animate({width: '33%'});
            inactive5.animate({height: '8px', marginLeft:'20px', marginRight:'20px'}, 100);
            inactive6.animate({height: '8px', marginLeft:'10px', marginRight:'10px'}, 100);

       } else if (currentItem3.is(contentFirst)) {
            currentItem3.animate({opacity: 0}, 1000);
            currentItem3 = nextItem.addClass('active');
            $('.step3').animate({width: '66%'});
            inactive6.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);

        } else {
            currentItem3 = nextItem.addClass('active');
            $('.step3').animate({width: '100%'});
            inactive5.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
        }
    });

});
