
$(document).ready(function () {
    // ======================= Add product by local storage ====================================//
    $(".btn-user-login").click(function () {
        // Tạo đối tượng mẫu
        var myObject1 = {
            username: $(".u-username").val(),
            password: $(".u-password").val()
        };

        // Chuyển đối tượng thành chuỗi JSON
        var myObjectJson = JSON.stringify(myObject1);

        // Lưu trữ chuỗi JSON vào Local Storage
        localStorage.setItem("myObject1", myObjectJson);

    });

    var myObjectJson = localStorage.getItem("myObject1");

    // Chuyển đổi chuỗi JSON trở lại thành đối tượng
    var myObject1 = JSON.parse(myObjectJson);

    $(".u-username").val(myObject1.username);
    $(".u-password").val(myObject1.password);
});