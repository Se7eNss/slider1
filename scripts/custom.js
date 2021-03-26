$(function () {
    // <!-- _____________________________ main _____________________________________________________________ -->
    var interval;

    $("#slideRight").click(function () {
        addClasses();
        clearInterval(interval);
        timer();
        $("#stop").addClass("show").siblings().removeClass("show");
        $("#time-bar").removeClass("time-bar-ani");
    })

    // $("#slideLeft").click(function () {
    //     addClassesLeft();
    //     clearInterval(interval);
    // })

    $("#stop").click(function () {
        clearInterval(interval);
        $("#play").addClass("show").siblings().removeClass("show");
        $("#time-bar").removeClass("time-bar-ani");
    });

    $("#play").click(function () {
        timer();
        $("#stop").addClass("show").siblings().removeClass("show");
    });

    setTimeout(() => {
        $("#time-bar").addClass("time-bar-ani");
    }, 1000);

    var timer = function () {
        interval = setInterval(function () {
            addClasses()

            $("#time-bar").removeClass("time-bar-ani");

            setTimeout(() => {
                $("#time-bar").addClass("time-bar-ani");
            }, 1000);
        }, 4000);

    };

    timer();
});

var i = 0;

// <!-- _____________________________ kartların sola hareketi _____________________________________________________________ -->
function addClasses() {
    $('.overlay .item').each(function () {
        if ($(this).hasClass("cover")) {
            $(this).addClass("r-50").removeClass("cover");
        }
        else if ($(this).hasClass("r-50")) {
            $(this).addClass("r-0").removeClass("r-50").find(".shadow ul").removeClass("animate__fadeOutDown");
        }
        else if ($(this).hasClass("r-0")) {
            $(this).addClass("r-10").removeClass("r-0");
        }
        else if ($(this).hasClass("r-10")) {
            $(this).addClass("r-20").removeClass("r-10");
        }
        else if ($(this).hasClass("r-20")) {
            $(this).addClass("r-30").removeClass("r-20");
        }
        else if ($(this).hasClass("r-30")) {
            $(this).addClass("ani-cover").removeClass("r-30").find(".shadow ul").addClass("animate__fadeOutDown");
        }
        else if ($(this).hasClass("ani-cover")) {
            $(this).addClass("r-50").removeClass("ani-cover");
        }
    });

    progressBar();
}

// <!-- _____________________________ kartların sağa hareketi _____________________________________________________________ -->
// function addClassesLeft() {
//     $('.overlay .item').each(function () {
//         // burda switc-case

//         if ($(this).hasClass("ani-cover")) {
//             $(this).addClass("r-30").removeClass("ani-cover");
//         } else if ($(this).hasClass("r-50")) {
//             $(this).addClass("ani-cover").removeClass("r-50");
//             // .find(".shadow ul").addClass("animate__fadeOutDown")
//         } else if ($(this).hasClass("r-0")) {
//             $(this).addClass("r-50").removeClass("r-0");
//         } else if ($(this).hasClass("r-10")) {
//             $(this).addClass("r-0").removeClass("r-10");
//         } else if ($(this).hasClass("r-20")) {
//             $(this).addClass("r-10").removeClass("r-20");
//         } else if ($(this).hasClass("r-30")) {
//             $(this).addClass("r-20").removeClass("r-30");
//             // .find(".shadow ul").removeClass("animate__fadeOutDown")
//         } else if ($(this).hasClass("cover")) {
//             $(this).addClass("r-30").removeClass("cover");
//         }

//     });

//     progressBarLeft();
// }

// <!-- _____________________________ progress sağa doğru _____________________________________________________________ -->
function progressBar() {
    if (i == 0) {
        $("#progressBar").addClass("progress-2");

        $(".count").removeClass("animate__fadeInRight");

        setTimeout(() => {
            $(".count").addClass("animate__fadeInRight");
            $("#count").text("02");
        }, 1000);

        setTimeout(() => {

        }, 1000);
    }
    else if (i == 1) {
        $("#progressBar").addClass("progress-3").removeClass("progress-2");

        $(".count").removeClass("animate__fadeInRight");

        setTimeout(() => {
            $(".count").addClass("animate__fadeInRight");
            $("#count").text("03");
        }, 1000);
    } else if (i == 2) {
        $("#progressBar").addClass("progress-4").removeClass("progress-3");

        $(".count").removeClass("animate__fadeInRight");

        setTimeout(() => {
            $(".count").addClass("animate__fadeInRight");
            $("#count").text("04");
        }, 1000);
    } else if (i == 3) {
        $("#progressBar").addClass("progress-5").removeClass("progress-4");

        $(".count").removeClass("animate__fadeInRight");

        setTimeout(() => {
            $(".count").addClass("animate__fadeInRight");
            $("#count").text("05");
        }, 1000);
    } else if (i == 4) {
        $("#progressBar").addClass("progress-6").removeClass("progress-5");

        $(".count").removeClass("animate__fadeInRight");

        setTimeout(() => {
            $(".count").addClass("animate__fadeInRight");
            $("#count").text("06");
        }, 1000);
    } else if (i == 5) {
        $("#progressBar").removeClass().addClass("progress-bar animate__animated progress-1");

        $(".count").removeClass("animate__fadeInRight");

        setTimeout(() => {
            $(".count").addClass("animate__fadeInRight");
            $("#count").text("01");
        }, 1000);
    }

    // setTimeout(() => {
    //     $(".count").removeClass("animate__fadeInRight");

    //     setTimeout(() => {
    //         $(".count").addClass("animate__fadeInRight");
    //     }, 1000);
    // }, 1000);



    changeContent();
};

// <!-- _____________________________ progress sola doğru _____________________________________________________________ -->
// function progressBarLeft() {
//     if (i == 0) {
//         $("#progressBar").addClass("progress-6");
//         $("#count").text("6");
//         i = 7;
//     } else if (i == 1) {
//         $("#progressBar").removeClass().addClass("progress-bar animate__animated");
//         $("#count").text("0");
//         // k=2;
//     } else if (i == 2) {
//         $("#progressBar").addClass("progress-1").removeClass("progress-2");
//         $("#count").text("1");
//         // k=3;
//     } else if (i == 3) {
//         $("#progressBar").addClass("progress-2").removeClass("progress-3");
//         $("#count").text("2");
//         // k=4;
//     } else if (i == 4) {
//         $("#progressBar").addClass("progress-3").removeClass("progress-4");
//         $("#count").text("3");
//         // k=4;
//     } else if (i == 5) {
//         $("#progressBar").addClass("progress-4").removeClass("progress-5");
//         $("#count").text("4");
//         // k=5;
//     } else if (i == 6) {
//         $("#progressBar").addClass("progress-5").removeClass("progress-6");
//         $("#count").text("5");
//     }
//     changeContentLeft();
// };

// <!-- _____________________________ içerik sağdan gelirken _____________________________________________________________ -->
function changeContent() {
    $('.overlay .item').each(function () {

        if (i == 0) {
            $(".content").eq(1).addClass("show").siblings().removeClass("show");
        }
        else if (i == 1) {
            $(".content").eq(2).addClass("show").siblings().removeClass("show");
        } else if (i == 2) {
            $(".content").eq(3).addClass("show").siblings().removeClass("show");
        } else if (i == 3) {
            $(".content").eq(4).addClass("show").siblings().removeClass("show");
        } else if (i == 4) {
            $(".content").eq(5).addClass("show").siblings().removeClass("show");
        } else if (i == 5) {
            $(".content").eq(0).addClass("show").siblings().removeClass("show");
            i = -1;
        }
    });
    i++;
}

// <!-- _____________________________ içerik soldan gelirken _____________________________________________________________ -->
// function changeContentLeft() {
//     alert(i);
//     $('.overlay .item').each(function () {


//         if (i == 0) {
//             $(".content").eq(5).addClass("show").siblings().removeClass("show");
//         }
//          else if (i == 1) {
//             $(".content").eq(0).addClass("show").siblings().removeClass("show");
//         } else if (i == 2) {
//             $(".content").eq(1).addClass("show").siblings().removeClass("show");
//         } else if (i == 3) {
//             $(".content").eq(2).addClass("show").siblings().removeClass("show");
//         } else if (i == 4) {
//             $(".content").eq(3).addClass("show").siblings().removeClass("show");
//         } else if (i == 5) {
//             $(".content").eq(4).addClass("show").siblings().removeClass("show");
//             i = -1;
//         }




//         // if (i == 0) {
//         //     $(".content").eq(i).addClass("show").siblings().removeClass("show");
//         //     i = 7;
//         // } else if (i == 1) {
//         //     $(".content").eq(i).addClass("show").siblings().removeClass("show");

//         // } else if (i == 2) {
//         //     $(".content").eq(i).addClass("show").siblings().removeClass("show");

//         // } else if (i == 3) {
//         //     $(".content").eq(i).addClass("show").siblings().removeClass("show");

//         // } else if (i == 4) {
//         //     $(".content").eq(i).addClass("show").siblings().removeClass("show");

//         // } else if (i == 5) {
//         //     $(".content").eq(i).addClass("show").siblings().removeClass("show");

//         // } else if (i == 6) {
//         //     $(".content").eq(i).addClass("show").siblings().removeClass("show");

//         // }


//         // if ($(".ani-cover").hasClass("item-0")) {
//         //     index = 4;
//         //     $(".content").eq(index).addClass("show").siblings().removeClass("show");
//         // } else if ($(".ani-cover").hasClass("item-1")) {
//         //     index = 5;
//         //     $(".content").eq(index).addClass("show").siblings().removeClass("show");
//         // }
//         // else if ($(".ani-cover").hasClass("item-2")) {
//         //     index = 0;
//         //     $(".content").eq(index).addClass("show").siblings().removeClass("show");
//         // }
//         // else if ($(".ani-cover").hasClass("item-3")) {
//         //     index = 1;
//         //     $(".content").eq(index).addClass("show").siblings().removeClass("show");
//         // }
//         // else if ($(".ani-cover").hasClass("item-4")) {
//         //     index = 2;
//         //     $(".content").eq(index).addClass("show").siblings().removeClass("show");
//         // }
//         // else if ($(".ani-cover").hasClass("item-5")) {
//         //     index = 3;
//         //     $(".content").eq(index).addClass("show").siblings().removeClass("show");
//         // }
//     });
//     i--;
//     // alert(i);
// }
