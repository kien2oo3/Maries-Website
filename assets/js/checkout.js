$(document).ready(function () {
    $("a.new-addr").parent("div").parent(".box-addr").hide(0);

    $("a.old-addr").click(function () {
        $(this).parent("div").parent(".box-addr").fadeOut("slow");
        $("a.new-addr").parent().parent(".box-addr").fadeIn("slow");
    });
    $(".new-addr").click(function () {
        $(this).parent("div").parent(".box-addr").fadeOut("slow");
        $("a.old-addr").parent("div").parent(".box-addr").fadeIn("slow");
    });
    //.list-pay .pay-item
    $(".list-pay .pay-item").hover(
        function () {
            $(this).addClass("duplicate-alert");
        },
        function () {
            $(".list-pay .pay-item").removeClass("duplicate-alert");
        }
    );
    $(".list-pay .pay-item").click(
        function () {
            $(".list-pay .pay-item").removeClass("alert alert-danger");
            $(this).addClass("alert alert-danger");
        }
    );
    // Đổi phương thức thanh toán:
    $(".modal-footer .btn-pptt").click(function () {
        var myObject;
        // Tạo đối tượng mẫu
        $(".list-pay .pay-item").each(function () {
            if ($(this).hasClass("alert alert-danger")) {
                myObject = {
                    img_src: $(this).find(".img-pptt img").attr("src"),
                    title: $(this).find(".name-pptt").text(),
                };
            }
        });
        // Chuyển đối tượng thành chuỗi JSON
        var myObjectJson = JSON.stringify(myObject);

        // Lưu trữ chuỗi JSON vào Local Storage
        localStorage.setItem("myObject", myObjectJson);

        var myObjectJson = localStorage.getItem("myObject");

        // Chuyển đổi chuỗi JSON trở lại thành đối tượng
        var myObject = JSON.parse(myObjectJson);

        var temp = `
            <div class="d-flex justify-content-between align-items-center pp-tt">
                <div class="d-flex justify-content-start align-items-center">
                    <div class="card-image">
                        <img src="${myObject.img_src}" alt="pic">
                    </div>
                    <div class="ps-2">
                        <div class="text-danger fw-bold">${myObject.title}</div>
                    </div>
                </div>
                <div>
                    <a href="#">
                        <span class="text-danger">thay đổi</span> <i class="fa-solid fa-angle-right text-danger"></i>
                    </a>
                </div>
            </div>`;
        $(".bg-light .myModal").html(temp);
    });

});