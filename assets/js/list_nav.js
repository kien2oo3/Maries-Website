$(document).ready(function(){
    // Lấy các phần tử i
    var targetElements = $("ul.list-nav li");

    // Lấy danh sách các phần
    var about = $("section#about");
    var menu = $("section#menu");
    var chefs = $("section#chefs");
    var gallery = $("section#gallery");
    var contact = $("section#contact");

    // Thêm sự kiện cuộn cho cửa sổ
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var t1 = $(about).offset().top-100;
        var t2 = $(menu).offset().top-100;
        var t3 = $(chefs).offset().top-100;
        var t4 = $(gallery).offset().top-100;
        var t5 = $(contact).offset().top-100;
   
        // Kiểm tra xem đã cuộn đến phần tử mục tiêu hay chưa
        if (scrollTop <t1) {
            $(targetElements).find("i").removeClass("text-light"); // Xóa lớp CSS khỏi từng thẻ i
        }else if (scrollTop >= t1 && scrollTop<t2) {
            $(targetElements).find("i").removeClass("text-light"); // Xóa lớp CSS khỏi từng thẻ i
            $(targetElements[0]).find("i").addClass("text-light"); // Thêm lớp CSS cho từng thẻ i
        }else if(scrollTop>=t2 && scrollTop<t3){
            $(targetElements).find("i").removeClass("text-light"); // Xóa lớp CSS khỏi từng thẻ i
            $(targetElements[1]).find("i").addClass("text-light"); // Thêm lớp CSS cho từng thẻ i
        }else if(scrollTop>=t3 && scrollTop<t4){
            $(targetElements).find("i").removeClass("text-light"); // Xóa lớp CSS khỏi từng thẻ i
            $(targetElements[2]).find("i").addClass("text-light"); // Thêm lớp CSS cho từng thẻ i
        }else if(scrollTop>=t4 && scrollTop<t5){
            $(targetElements).find("i").removeClass("text-light"); // Xóa lớp CSS khỏi từng thẻ i
            $(targetElements[3]).find("i").addClass("text-light"); // Thêm lớp CSS cho từng thẻ i
        }else if(scrollTop>=t5 && scrollTop){
            $(targetElements).find("i").removeClass("text-light"); // Xóa lớp CSS khỏi từng thẻ i
            $(targetElements[4]).find("i").addClass("text-light"); // Thêm lớp CSS cho từng thẻ i
        }
    });
});