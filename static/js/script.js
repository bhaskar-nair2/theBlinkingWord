$(document).ready(function () {

    $('#hero').css({
        'height': '100%',
        'width': '100%',
        'grid-template-rows': '[typer]60vh [links]25vh [dwn]15vh'
    });
    $('#app-holder').css({
        'margin-top': 25 + 'vh'
    });
    $('#link-holder').css({
        'margin-top': 13 + 'vh'
    });
    $('.link').css({
        'opacity': 0,
    });
    // $('#scr-ani').css({
    //     'opacity': 0
    // });
    $('#jst-scr').css({
        'opacity': 0
    });
    $('#chev').css({
        'opacity': 0
    });
    $('.preloader').css({
        'display': 'None',
        'transition': 'all 1s ease-in-out'
    });
    StartCtrl()
});


async function StartCtrl() {
    appPLay();
    setTimeout(function () {
        $('.link').css({
            'opacity': 1,
            'transition': 'all 1s ease-in-out'
        });
    }, (3000));
    setTimeout(function () {
        $('#jst-scr').css({
            'opacity': 1,
            'transition': 'all 1s ease-in-out'
        });
    }, (4000));
    setTimeout(function () {
        $('#chev').css({
            'opacity': 1,
            'transition': 'all 1s ease-in-out'
        });
    }, (5000));
}

function appPLay() {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        blinkSpeed: 20,
        loop: false
    });

    typewriter
        .typeString('The')
        .typeString(' B')
        .typeString('linking')
        .typeString(' Word')
        .pauseFor(700)
        .typeString('.')
        .start();
}

$(document).on("scroll", function () {

    var dh = $(document).height();
    var wh = $(window).height();
    var scrollTop = $(document).scrollTop() / (dh - wh) * 10000;

    //FROM 0


    if (scrollTop <= 1) {
        opacityScroll = 1;
    }
    else if (scrollTop > 400) {
        opacityScroll = 0;
    }

    else {
        opacityScroll = 1 - (scrollTop / 399);
    }
    $('#scr-ani').css({
        'opacity': opacityScroll,
    });


    {
        if (scrollTop <= 10) {
            opacity = 0;
            Height = 100;
        }

        else if (scrollTop > 1000) {
            Height = 40;
            opacity = 0.94;
        }

        else {
            Height = 100 - ((scrollTop - 10) / 990 * 60);
            opacity = ((scrollTop - 10) / 990 * 0.94);

        }
    }
    //App height control
    {
        if (scrollTop < 10) {
            //MAX VALUES
            lineHeight = 15;
            marginTop = 25;
            linkMargin = 13;
            typer = 60;
            link = 25;
            dwn = 15;
        }
        else if (scrollTop > 1000) {
            //MIN Values
            lineHeight = 8;
            marginTop = 7;
            linkMargin = 1;
            typer = 30;
            link = 10;
            dwn = 5;
        }
        else {
            //MAX - F(scrollTop)/(p1-p2) * (MAX-MIN)
            lineHeight = 15 - ((scrollTop - 10) / 990 * 7);
            appHeight = 60;
            marginTop = 25 - ((scrollTop - 10) / 990 * 18);
            typer = 60 - ((scrollTop - 10) / 990 * 30);
            link = 25 - ((scrollTop - 10) / 990 * 15);
            dwn = 15 - ((scrollTop - 10) / 990 * 10);
            linkMargin = 13 - ((scrollTop - 10) / 990 * 12);
        }
    }

    {
        if (scrollTop < 3000) {
            linkopacity = 1;
        }
        else if (scrollTop > 3300) {
            linkopacity = 0;
            link = 0;
            dwn = 0;
            Height = 32;
        }
        else {
            linkopacity = 1 - ((scrollTop - 3000) / 300);
            Height = 40 - ((scrollTop - 3000) / 300 * 8);
            link = 10 - ((scrollTop - 3000) / 300);
            dwn = 5 - ((scrollTop - 3000) / 300);
        }
    }

    {
        if (scrollTop < 6200) {
            fontsize = 18;
            wordSpace = 80;
            titleOP = 1;
        }
        else if (scrollTop > 6500) {
            Height = 12;
            fontsize = 9;
            wordSpace = 2;
            marginTop = 3;
            titleOP = 1;
        }
        else {
            Height = 32 - ((scrollTop - 6200) / 300 * 20);
            marginTop = 7 - ((scrollTop - 6200) / 300 * 4);

            if (scrollTop > 6200 && scrollTop < 6300) {
                fontsize = 18;
                wordSpace = 80;
                titleOP = 1 - ((scrollTop - 6200) / 100);
            }
            else if (scrollTop >= 6300 && scrollTop < 6350) {
                titleOP = 0;
                fontsize = 9;
                wordSpace = 2;
            }
            else if (scrollTop > 6350) {
                titleOP = ((scrollTop - 6350) / 50);
            }

        }
    }

    {
        if (scrollTop < 9700) {
            heroop = 1;
        }
        else if (scrollTop > 9800) {
            heroop = 0;
        }
        else {
            heroop = 1 - ((scrollTop - 9700) / 100);
        }

    }
    console.log(scrollTop, Height);

    $('#hero').css({
        'height': Height + "vh",
        'opacity': heroop,
        'background-color': "rgba(63, 81, 181, " + opacity + ")",
        'grid-template-rows': '[typer]' + typer + 'vh [links]' + link + 'vh [dwn]' + dwn + 'vh',
    });
    $('#app').css({
        'line-height': lineHeight + 'vh',
        'font-size': fontsize + 'vw',
        'word-spacing': wordSpace + 'vw',
        'opacity': titleOP
    });
    $('#app-holder').css({
        'margin-top': marginTop + 'vh',
    });
    $('#link-holder').css({
        "opacity": linkopacity,
        'margin-top': linkMargin + 'vh',
    });
});