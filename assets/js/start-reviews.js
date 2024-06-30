$(document).ready(function () {
    var li = $("#start-reviews ul.list-unstyled li");
    var i = $("#start-reviews ul.list-unstyled i");
    console.log(i);
    $(li).hover(
        function () {
            $(i).removeClass("start-active");
            $(this).css("cursor","pointer");
            var index = $(this).index();
            while (index >= 0) {
                $(i).eq(index).addClass("text-warning");
                index--;
            }
        },
        function(){
            $(i).removeClass("text-warning");
        }
    );
    $(li).click(function () {
        var index = $(this).index();
        while (index >= 0) {
            $(i).eq(index).addClass("start-active");
            index--;
        }
    });
    $(".input-counter__minus").click(function () {
        var index = parseInt($(".input-counter__text").val());
        if (index > 1 && index <= 100) {
            index -= 1;
            $(".input-counter__text").val(index);
        }
    });
    $(".input-counter__plus").click(function () {
        var index = parseInt($(".input-counter__text").val());
        if (index <= 100) {
            index += 1;
            $(".input-counter__text").val(index);
        }
    });
});