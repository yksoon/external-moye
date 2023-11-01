$(function () {
    $('#nav').hide();
    $('.all_menu').click(function () {
        $('#nav').slideToggle();
    });
});

$(function () {
    $('#nav1_s').hide();
    $('#nav1').click(function () {
        $('#nav1_s').slideToggle();

        $('#nav2_s').slideUp();
        $('#nav3_s').slideUp();
        $('#nav4_s').slideUp();
        $('#nav5_s').slideUp();
        $('#nav6_s').slideUp();
        $('#nav7_s').slideUp();
        $('#nav8_s').slideUp();
    });
});

$(function () {
    $('#nav2_s').hide();
    $('#nav2').click(function () {
        $('#nav2_s').slideToggle();

        $('#nav1_s').slideUp();
        $('#nav3_s').slideUp();
        $('#nav4_s').slideUp();
        $('#nav5_s').slideUp();
        $('#nav6_s').slideUp();
        $('#nav7_s').slideUp();
        $('#nav8_s').slideUp();
    });
});
$(function () {
    $('#nav3_s').hide();
    $('#nav3').click(function () {
        $('#nav3_s').slideToggle();

        $('#nav1_s').slideUp();
        $('#nav2_s').slideUp();
        $('#nav4_s').slideUp();
        $('#nav5_s').slideUp();
        $('#nav6_s').slideUp();
        $('#nav7_s').slideUp();
        $('#nav8_s').slideUp();
    });
});
$(function () {
    $('#nav4_s').hide();
    $('#nav4').click(function () {
        $('#nav4_s').slideToggle();

        $('#nav1_s').slideUp();
        $('#nav2_s').slideUp();
        $('#nav3_s').slideUp();
        $('#nav5_s').slideUp();
        $('#nav6_s').slideUp();
        $('#nav7_s').slideUp();
        $('#nav8_s').slideUp();
    });
});

$(function () {
    $('#nav5_s').hide();
    $('#nav5').click(function () {
        $('#nav5_s').slideToggle();

        $('#nav1_s').slideUp();
        $('#nav2_s').slideUp();
        $('#nav3_s').slideUp();
        $('#nav4_s').slideUp();
        $('#nav6_s').slideUp();
        $('#nav7_s').slideUp();
        $('#nav8_s').slideUp();
    });
});

$(function () {
    $('#nav6_s').hide();
    $('#nav6').click(function () {
        $('#nav6_s').slideToggle();

        $('#nav1_s').slideUp();
        $('#nav2_s').slideUp();
        $('#nav3_s').slideUp();
        $('#nav4_s').slideUp();
        $('#nav5_s').slideUp();
        $('#nav7_s').slideUp();
        $('#nav8_s').slideUp();
    });
});

$(function () {
    $('#nav7_s').hide();
    $('#nav7').click(function () {
        $('#nav7_s').slideToggle();

        $('#nav1_s').slideUp();
        $('#nav2_s').slideUp();
        $('#nav3_s').slideUp();
        $('#nav4_s').slideUp();
        $('#nav5_s').slideUp();
        $('#nav6_s').slideUp();
        $('#nav8_s').slideUp();
    });
});


$(function () {
    $('#nav8_s').hide();
    $('#nav8').click(function () {
        $('#nav8_s').slideToggle();

        $('#nav1_s').slideUp();
        $('#nav2_s').slideUp();
        $('#nav3_s').slideUp();
        $('#nav4_s').slideUp();
        $('#nav5_s').slideUp();
        $('#nav6_s').slideUp();
        $('#nav7_s').slideUp();
    });
});

//퍼블 할때마다 페이지 추가
function navList(listName) {
    switch (listName) {
        case "dash":
            location.href = "index.html";
            break;

        case "memberList":
            location.href = "member_list.html";
            break;

        case "notice":
            location.href = "notice.html";
            break;

        case "counsel":
            location.href = "counsel.html";
            break;

        case "photo":
            location.href = "photo.html";
            break;

        case "video":
            location.href = "video.html";
            break;

        case "category":
            location.href = "category.html";
            break;

        default:
            break;
    }
}

// document.addEventListener("DOMContentLoaded", function() {
// 	var sub2depthElements = document.querySelectorAll('.sub_2depth');
// 	var sub3depthElements = document.querySelectorAll('.sub_3depth');
// 	var subGnbLinks = document.querySelectorAll('.sub_gnb > li > a');
// 	var sub2depthLinks = document.querySelectorAll('.sub_2depth > li > a');
// 	var allGnbButton = document.getElementById('all_gnb');

// 	sub2depthElements.forEach(function(element) {
// 		element.style.display = 'none';
// 	});

// 	sub3depthElements.forEach(function(element) {
// 		element.style.display = 'none';
// 	});

// 	subGnbLinks.forEach(function(link) {
// 		link.addEventListener('click', function() {
// 			sub2depthElements.forEach(function(element) {
// 				element.style.display = 'none';
// 			});
// 			subGnbLinks.forEach(function(link) {
// 				link.classList.remove('on');
// 			});
// 			this.nextElementSibling.style.display = 'block';
// 			this.classList.toggle('on');
// 		});
// 	});

// 	sub2depthLinks.forEach(function(link) {
// 		link.addEventListener('click', function() {
// 			this.nextElementSibling.style.display = 'block';
// 			this.classList.toggle('on');
// 		});
// 	});

// 	allGnbButton.addEventListener('click', function() {
// 		sub2depthElements.forEach(function(element) {
// 			element.style.display = 'block';
// 		});
// 		sub3depthElements.forEach(function(element) {
// 			element.style.display = 'block';
// 		});
// 	});
// });


