$(document).ready(function () {
    $(".input-counter__minus").click(function () {
        var index = parseInt($(this).siblings(".input-counter__text").val());
        if (index > 1 && index <= 100) {
            index -= 1;
            $(this).siblings(".input-counter__text").val(index);
        }
    });
    $(".input-counter__plus").click(function () {
        var index = parseInt($(this).siblings(".input-counter__text").val());
        console.log(index);
        if (index <= 100) {
            index += 1;
            $(this).siblings(".input-counter__text").val(index);
            console.log($(this).siblings(".input-counter__text").val());
        }
    });
    $(".p-choose-all").click(function () {
        console.log($(".p-choose-all").prop("checked"));
        if ($(this).prop("checked")) {
            $(".p-choose").prop("checked", true);
            $(".total-coutt").text(parseInt($(".p-choose").length));
            $(".sub-total-price").text("2.350.000đ");
        } else {
            $(".p-choose").prop("checked", false);
            $(".total-coutt").text(0);
            $(".sub-total-price").text(0);
        }
    })
    $(".p-choose").click(function () {
        if ($(this).prop("checked") == false) {
            $(".p-choose-all").prop("checked", false);
        } else {
            var rs = true;
            $(".p-choose").each(function () {
                if ($(this).prop("checked") == false) {
                    rs = false;
                }
            });
            if (rs) {
                $(".p-choose-all").prop("checked", true);
            }
        }
    });
});