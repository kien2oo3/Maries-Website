$(document).ready(function () {
  // ======================= Form Search ===============================//
  // $("#form-search .btn-search-item").mouseover(function () {
  //   if ($("#form-search input").css("display") == "none") {
  //     $("#form-search input").fadeIn("slow");
  //   }
  // });
  // $("#header").mouseleave(function () {
  //   $("#form-search input").fadeOut("slow");
  // });

  // ======================= Remove product on Cart from index ===============================//
  var total_xoa = 0;
  var subtotal1 = parseFloat($(".subtotal-value").text());
  var btn_deletes = $(".card-mini-product:visible .mini-product__delete-link");
  btn_deletes.click(function () {
    $(this).parent(".card-mini-product").fadeOut();
    // Tìm phần tử cha gần nhất có class là card-mini-product
    var parent = $(this).closest('.card-mini-product');

    // Tìm phần tử con có class là mini-product__price trong phần tử cha đã tìm được
    var priceElement = parseFloat(parent.find('.mini-product__price').text());
    var countElement = parseFloat(parent.find('.mini-product__quantity').text());
    total_xoa = parseFloat(priceElement * countElement);
    subtotal1 = subtotal1 - total_xoa;
    $(".subtotal-value-temp").text(subtotal1.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
    total_xoa = 0;
  });

  // ======================= Remove product on Cart form cart ===============================//
  var list_items = $(".product-cart-item .item-check .item-remove");
  list_items.click(function () {
    $(this).parent(".item-check").parent(".product-cart-item").parent("div").fadeOut("slow");
  });

  // ======================= Add product by local storage ====================================//
  $(".btn-add-product").click(function () {
    // Tạo đối tượng mẫu
    var myObject = {
      p_img: $("#list_slider_item li").eq(0).find("img").attr("src"),
      p_name: $(".p-name.js-name-detail").text(),
      p_category: $(".category-item .p-category").text(),
      p_count: parseInt($(".input-counter__text").val()),
      p_price: parseInt($(".new-price-curent").text()),
    };

    // Chuyển đối tượng thành chuỗi JSON
    var myObjectJson = JSON.stringify(myObject);

    // Lưu trữ chuỗi JSON vào Local Storage
    localStorage.setItem("myObject", myObjectJson);

    console.log("Object saved to Local Storage");
    console.log("clicked!");
    // Lấy chuỗi JSON từ Local Storage
    var myObjectJson = localStorage.getItem("myObject");

    // Chuyển đổi chuỗi JSON trở lại thành đối tượng
    var myObject = JSON.parse(myObjectJson);

    // Hiển thị đối tượng trong console
    console.log("Loaded object:", myObject);

    //Thêm vào giỏ hàng
    var temp = `
      <div class="card-mini-product">
                                <div class="mini-product">
                                    <div class="mini-product__image-wrapper">

                                        <a class="mini-product__link" href="detail-product.html">

                                            <img class="u-img-fluid" src="${myObject.p_img}" alt="">
                                        </a>
                                    </div>
                                    <div class="mini-product__info-wrapper">

                                        <span class="mini-product__category">

                                            <a href="danh-muc-tu-linh.html">${myObject.p_category}</a></span>

                                        <span class="mini-product__name">

                                            <a href="detail-product.html">${myObject.p_name}</a></span>

                                        <span class="mini-product__quantity">${myObject.p_count} x</span>

                                        <span class="mini-product__price d-none">${myObject.p_price}</span>
                                        <span class="mini-product__price-temp">${myObject.p_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                    </div>
                                </div>

                                <a class="mini-product__delete-link far fa-trash-alt" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom" title="Xóa khỏi giỏ hàng!"></a>
                            </div>
    `;
    $(".mini-product-container").prepend(temp);
    var subtotal = parseFloat($(".subtotal-value").text()) + myObject.p_count * myObject.p_price;
    console.log(subtotal);

    $(".subtotal-value-temp").text(subtotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
  });
  // Xử lý phần subtotal:
  var subtotal3 = parseFloat($(".new-price-curent").text());
  var subtotal3_temp = parseFloat($(".new-price-curent").text());
  $(".input-counter__plus").click(function () {
    subtotal3 += subtotal3_temp;
    $(".new-price-curent-temp").text(subtotal3.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
  });
  $(".input-counter__minus").click(function () {
    subtotal3 -= subtotal3_temp;
    $(".new-price-curent-temp").text(subtotal3.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
  });

});