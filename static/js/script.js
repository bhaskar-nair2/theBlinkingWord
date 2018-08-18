function appPLay() {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        blinkSpeed: 35,
        loop: false
    });

    typewriter
        .typeString('The')
        .typeString(' B')
        // .pauseFor(200)
        // .typeString('lasted')
        // .pauseFor(600)
        // .deleteChars(6)
        // .typeString('elittling')
        // .pauseFor(600)
        // .deleteChars(9)
        // .typeString('rute')
        // .pauseFor(600)
        // .deleteChars(4)
        // .typeString('linking')
        // .pauseFor(1500)
        // .typeString(' World')
        // .pauseFor(800)
        // .deleteChars(2)
        // .pauseFor(1500)
        // .deleteChars(2)
        // .pauseFor(1500)
        // .deleteChars(9)
        // .pauseFor(1500)
        .typeString('linking Word')
        .pauseFor(700)
        .typeString('.')
        .start();
}


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
    // $('.link').css({
    //     'opacity': 0
    // });
    // $('#scr-ani').css({
    //     'opacity': 0
    // });
    // $('#jst-scr').css({
    //     'opacity': 0
    // });
    // $('#chev').css({
    //     'opacity': 0
    // });
    $('.preloader').css({
        'display': 'None'
    });
    appPLay()
});

$(document).on("scroll", function () {

    var dh = $(document).height();
    var wh = $(window).height();
    var scrollTop = $(document).scrollTop() / (dh - wh) * 10000;
    // $('.link').css({
    //         'opacity': 1
    //     });
    // if (scrollTop > 650) {
    //     $('#scr-ani').css({
    //         'opacity': 0
    //     });
    //     $('#jst-scr').css({
    //         'opacity': 0
    //     });
    //     $('#chev').css({
    //         'opacity': 0
    //     });
    // }
    // else if (scrollTop >= 0 && scrollTop < 650) {
    //     opacity = 1 - (scrollTop / 650);
    //     $('#scr-ani').css({
    //         'opacity': opacity
    //     });
    //     $('#jst-scr').css({
    //         'opacity': opacity
    //     });
    //     $('#chev').css({
    //         'opacity': opacity
    //     });
    //
    // }
    // else {
    //     $('#scr-ani').css({
    //         'opacity': 1
    //     });
    //     $('#jst-scr').css({
    //         'opacity': 1
    //     });
    //     $('#chev').css({
    //         'opacity': 1
    //     })
    // }


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
            link = 10;
            dwn = 5;
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
            // fontsize = 18 - ((scrollTop - 6200) / 300 * 9);
            marginTop = 7 - ((scrollTop - 6200) / 300 * 4);

            if (scrollTop > 6200 && scrollTop < 6300) {
                titleOP = 1 - ((scrollTop - 6200) / 300);
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
        else if (scrollTop > 10000) {
            heroop = 0;
        }
        else {
            heroop = 1 - ((scrollTop - 9700) / 300);
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


    // if ($(document).scrollTop() > 100) {
    //
    //     $('#link-holder').addClass('link-holder-shrink');
    //     $('#scr-ani').addClass('scr-ani-shrink');
    //     $('#jst-scr').addClass('jst-scr-shrink');
    //     $('#chev').addClass('chevron-shrink')
    // }
    // if ($(document).scrollTop() > 150) {
    //     $('#app').addClass('app-shrink');
    // }
    // else if ($(document).scrollTop() < 80) {
    //     $("#hero").removeClass("under").removeClass("hero-shrink");
    //     $('#app').removeClass('app-shrink');
    //     $('#link-holder').removeClass('link-holder-shrink');
    //     $('#scr-ani').removeClass('scr-ani-shrink');
    //     $('#jst-scr').removeClass('jst-scr-shrink');
    //     $('#chev').removeClass('chevron-shrink')
    // }
});