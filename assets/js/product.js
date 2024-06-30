$(document).ready(function () {
    var li_item = $(".category-item");
    li_item.hover(
        function () {
            $(this).children(".cate-img.position-absolute").stop(true,true).fadeOut("slow");
        },
        function () {
            $(this).children(".cate-img.position-absolute").stop(true,true).fadeIn("slow");
        }
    )
});