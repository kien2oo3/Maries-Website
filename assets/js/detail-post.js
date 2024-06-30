$(document).ready(function () {
    $(".list-group-item ul").hide();
    var li = $(".list-group-item ul");
    var btn = $(".btn-1");
    $(btn[0]).click(function () {
        $(li[0]).slideToggle("slow");
        if ($(btn[0]).attr("class") == "btn-1 fa-solid fa-caret-up") {
            $(btn[0]).attr("class", "btn-1 fa-solid fa-caret-down");
        } else
            $(btn[0]).attr("class", "btn-1 fa-solid fa-caret-up");
    });
    $(btn[1]).click(function () {
        $(li[1]).slideToggle("slow");
        if ($(btn[1]).attr("class") == "btn-1 fa-solid fa-caret-up") {
            $(btn[1]).attr("class", "btn-1 fa-solid fa-caret-down");
        } else
            $(btn[1]).attr("class", "btn-1 fa-solid fa-caret-up");
    });
    $(btn[2]).click(function () {
        $(li[2]).slideToggle("slow");
        if ($(btn[2]).attr("class") == "btn-1 fa-solid fa-caret-up") {
            $(btn[2]).attr("class", "btn-1 fa-solid fa-caret-down");
        } else
            $(btn[2]).attr("class", "btn-1 fa-solid fa-caret-up");
    });
    $(btn[3]).click(function () {
        $(li[3]).slideToggle("slow");
        if ($(btn[3]).attr("class") == "btn-1 fa-solid fa-caret-up") {
            $(btn[3]).attr("class", "btn-1 fa-solid fa-caret-down");
        } else
            $(btn[3]).attr("class", "btn-1 fa-solid fa-caret-up");
    });
    $(btn[4]).click(function () {
        $(li[4]).slideToggle("slow");
        if ($(btn[4]).attr("class") == "btn-1 fa-solid fa-caret-up") {
            $(btn[4]).attr("class", "btn-1 fa-solid fa-caret-down");
        } else
            $(btn[4]).attr("class", "btn-1 fa-solid fa-caret-up");
    });
    $(btn[5]).click(function () {
        $(li[5]).slideToggle("slow");
        if ($(btn[5]).attr("class") == "btn-1 fa-solid fa-caret-up") {
            $(btn[5]).attr("class", "btn-1 fa-solid fa-caret-down");
        } else
            $(btn[5]).attr("class", "btn-1 fa-solid fa-caret-up");
    });
    $(btn[6]).click(function () {
        $(li[6]).slideToggle("slow");
        if ($(btn[6]).attr("class") == "btn-1 fa-solid fa-caret-up") {
            $(btn[6]).attr("class", "btn-1 fa-solid fa-caret-down");
        } else
            $(btn[6]).attr("class", "btn-1 fa-solid fa-caret-up");
    });
});