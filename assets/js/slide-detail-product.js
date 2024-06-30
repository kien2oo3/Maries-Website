$(document).ready(function () {
    var isAnimating = false;
    //Set ảnh mặc định là ảnh đầu tiên trogn danh sách:
    $("#show img").attr("src", $("#list_slider_item li:first img").attr("src"));
    //Set ảnh đầu tiên được active
    $("#list_slider_item li:first").addClass("active");
    //Xử lý danh sách item:
    $("#list_slider_item li").click(function () {
        if (!isAnimating) {
            isAnimating = true;
            $("#list_slider_item li").removeClass("active");
            $(this).addClass("active");
            var src = $(this).find("img").attr("src");
            //$("#show img").attr("src", src);
            $("#show img").animate({ 'opacity': '0' }, 200, function () {
                isAnimating = false;
                $(this).attr("src", src).animate({ 'opacity': '1' }, 200);
            });
        }
    });
    //Xử lý 2 nút:
    $("#next_btn").click(function () {
        // $("#list_slider_item li.active").next().click();
        if ($("#list_slider_item li:last-child").hasClass("active")) {
            $("#list_slider_item li:first-child").click();
        } else {
            $("#list_slider_item li.active").next().click();
        }
    });
    $("#prev_btn").click(function () {
        // $("#list_slider_item li.active").next().click();
        if ($("#list_slider_item li:first-child").hasClass("active")) {
            $("#list_slider_item li:last-child").click();
        } else {
            $("#list_slider_item li.active").prev().click();
        }
    });
});