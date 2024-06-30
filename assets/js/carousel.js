$(document).ready(function () {
  $('#carousel').owlCarousel({
    center: true,  // Keep the centered item active
    loop: true,    // Enable looping
    nav: true,     // Show navigation arrows
    autoplay: true, // Enable autoplay
    autoplayHoverPause: true, // Pause on hover
    autoplayTimeout: 5000,  // Autoplay interval (5 seconds)
    smartSpeed: 600, // Smooth transition speed
    responsive: {
      // Adjust items based on screen width
      0: {
        items: 1, // Show 1 item on all screens (including small)
        dots: false,
      },
      1200: {
        items: 3, // Show 3 items on medium and larger screens
        dots: false,
      }
    },
    //   onTranslated: function(event) {
    //     // Thiết lập opacity của tất cả các item ban đầu
    //     // var items = $('#carousel .owl-item .item img');
    //     // items.css('opacity', 0.5);

    //     // Thiết lập opacity của item ở giữa thành 1
    //     // var activeItem = $('#carousel .owl-item.active.center .item img');
    //     // activeItem.css('opacity', 1);

    //   }
  });
});
// document.addEventListener('DOMContentLoaded', function () {
//     var carousel = document.querySelector('#demo .carousel-inner');
//     var carouselElement = document.getElementById('demo');
//     var startX, isDragging = false;

//     // Prevent default behavior (text selection) on drag start
//     function onDragStart(e) {
//         e.preventDefault();
//         isDragging = true;
//         startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
//         carousel.classList.add('grabbing');
//     }

//     // Handle drag movement and update carousel position
//     function onDragMove(e) {
//         if (!isDragging) return;
//         var x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
//         var diffX = startX - x;
//         if (Math.abs(diffX) > 50) { // Adjust sensitivity as needed
//             if (diffX > 0) {
//                 // Drag left, move to next item
//                 bootstrap.Carousel.getInstance(carouselElement).next();
//             } else {
//                 // Drag right, move to previous item
//                 bootstrap.Carousel.getInstance(carouselElement).prev();
//             }
//             isDragging = false;
//             carousel.classList.remove('grabbing');
//         }
//     }

//     // Reset drag state on drag end
//     function onDragEnd() {
//         isDragging = false;
//         carousel.classList.remove('grabbing');
//     }

//     // Attach event listeners for drag interactions
//     carousel.addEventListener('mousedown', onDragStart);
//     carousel.addEventListener('mousemove', onDragMove);
//     carousel.addEventListener('mouseup', onDragEnd);
//     carousel.addEventListener('touchstart', onDragStart);
//     carousel.addEventListener('touchmove', onDragMove);
//     carousel.addEventListener('touchend', onDragEnd);
// });