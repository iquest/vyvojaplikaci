var one = "#10e88a",
		two = "#7f3995";

$(window).on("scroll touchmove", function() {
	if ($("#two").length) {
		var positionTwo = $("#two").position().top - ($("#two").position().top/2);
			if ($(document).scrollTop() >= $("#one").position().top) {
					$('.img-cover').css('background', $("#one").attr("data-color"));
	        $('.subpage .image-background .motto .subtitle, .subpage .image-background .motto .title-1, .subpage .image-background .motto p, .subpage .advice-points > .row.narrow .text *').css('color', '#fff');
	        $('.full-page .wrapper .text *, .advice-points .text *').css({color : '#fff', transition: 'color .5s'});

			};
			if ($(document).scrollTop() > positionTwo) {
					$('.img-cover').css('background', $("#two").attr("data-color"));
	        $('.subpage .image-background .motto .subtitle, .subpage .image-background .motto .title-1, .subpage .image-background .motto p, .subpage .advice-points > .row.narrow .text *').css({color : '#000', transition: 'color .5s'});
	        $('.full-page .wrapper .text h2').css({color : '#292929'});
	        $('.full-page p, .full-page ul li, .advice-points .text *').css({color : '#414141'});
			};
	}  
});

$(".hamburger").click(function(){
    $(".navbar").toggle("slow", "swing");
});

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
