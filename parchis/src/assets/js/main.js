/* Typed.js */ ! function(t) {
	"use strict";
	var s = function(s, e) {
			this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
	};
	s.prototype = {
			constructor: s,
			init: function() {
					var t = this;
					t.timeout = setTimeout(function() {
							for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
							t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
					}, t.startDelay)
			},
			build: function() {
					var s = this;
					if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
							this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
							var e = this.stringsElement.children();
							t.each(e, function(e, i) {
									s.strings.push(t(i).html())
							})
					}
					this.init()
			},
			typewrite: function(t, s) {
					if (this.stop !== !0) {
							var e = Math.round(70 * Math.random()) + this.typeSpeed,
									i = this;
							i.timeout = setTimeout(function() {
									var e = 0,
											r = t.substr(s);
									if ("^" === r.charAt(0)) {
											var o = 1;
											/^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
									}
									if ("html" === i.contentType) {
											var n = t.substr(s).charAt(0);
											if ("<" === n || "&" === n) {
													var a = "",
															h = "";
													for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length)););
													s++, a += h
											}
									}
									i.timeout = setTimeout(function() {
											if (s === t.length) {
													if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
													i.timeout = setTimeout(function() {
															i.backspace(t, s)
													}, i.backDelay)
											} else {
													0 === s && i.options.preStringTyped(i.arrayPos);
													var e = t.substr(0, s + 1);
													i.attr ? i.el.attr(i.attr, e) : i.isInput ? i.el.val(e) : "html" === i.contentType ? i.el.html(e) : i.el.text(e), s++, i.typewrite(t, s)
											}
									}, e)
							}, e)
					}
			},
			backspace: function(t, s) {
					if (this.stop !== !0) {
							var e = Math.round(70 * Math.random()) + this.backSpeed,
									i = this;
							i.timeout = setTimeout(function() {
									if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
											for (var e = "";
													"<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(0 > s)););
											s--, e += "<"
									}
									var r = t.substr(0, s);
									i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
							}, e)
					}
			},
			shuffleArray: function(t) {
					var s, e, i = t.length;
					if (i)
							for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
					return t
			},
			reset: function() {
					var t = this;
					clearInterval(t.timeout);
					this.el.attr("id");
					this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
			}
	}, t.fn.typed = function(e) {
			return this.each(function() {
					var i = t(this),
							r = i.data("typed"),
							o = "object" == typeof e && e;
					r && r.reset(), i.data("typed", r = new s(this, o)), "string" == typeof e && r[e]()
			})
	}, t.fn.typed.defaults = {
			strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
			stringsElement: null,
			typeSpeed: 0,
			startDelay: 0,
			backSpeed: 0,
			shuffle: !1,
			backDelay: 500,
			loop: !1,
			loopCount: !1,
			showCursor: !0,
			cursorChar: "|",
			attr: null,
			contentType: "html",
			callback: function() {},
			preStringTyped: function() {},
			onStringTyped: function() {},
			resetCallback: function() {}
	}
}(window.jQuery);
(function ($) {
	"use strict";
	$(window).load(function() {
		$(".typing").typed({
				strings: ["Up your Social Media Game with Parchis.", "We tell story of your brand with greater clarity and more compelling, artful engagement.", " Need Assistance regarding smart social media strategy, engaging brand-based experiences and buzz-worthy content?"],
				/* You can change the home section typing text from
																																												here and do not use "&" use "and" */
				typeSpeed: 30,
				loop: true
		});
});
	/*----------------------------
    Responsive menu Active
    ------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu',
	});
	
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 10) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.mainmenu li a, .logo a,.slicknav_nav li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.screenshot-wrap').slick({
		autoplay: true,
		dots: true,
		autoplaySpeed: 1000,
		slidesToShow: 3,
		centerPadding: '20%',
		centerMode: true,
		prevArrow: '',
		nextArrow: '',
		responsive: [{

		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			centerPadding: '33.3%'
		  }

		},{

		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			centerPadding: '0'
		  }

		}]
	});
	
	var testimonialSlider = $('.testimonial-wrap');
	testimonialSlider.owlCarousel({
		loop:true,
		dots: true,
		mouseDrag: false,
		autoplay: false,
		autoplayTimeout:4000,
		nav: false,
		items: 1,
	});
	testimonialSlider.on("translate.owl.carousel", function(){
		$(".single-testimonial-box img, .author-rating").removeClass("animated zoomIn").css("opacity", "0");
	});
	testimonialSlider.on("translated.owl.carousel", function(){
		$(".single-testimonial-box img, .author-rating").addClass("animated zoomIn").css("opacity", "1");
	});
	testimonialSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('.author-img').html();
		var nextRating = $(property.target).find(".owl-item").eq(current).next().find('.author-img').html();
		$('.thumb-prev .author-img').html(prevRating);
		$('.thumb-next .author-img').html(nextRating);
	});
	$('.thumb-next').on('click', function() {
		testimonialSlider.trigger('next.owl.carousel', [300]);
		return false;
	});
	$('.thumb-prev').on('click', function() {
		testimonialSlider.trigger('prev.owl.carousel', [300]);
		return false;
	});
	
	var heroSlider = $('.hero-area-slider');
	heroSlider.owlCarousel({
		loop:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
		items: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		mouseDrag: true,
		touchDrag: true,
		responsive:{
			768:{
				mouseDrag: false,
				touchDrag: false,
			}
		}
	});
	
	/*----------------------------
	START - videos popup
	------------------------------ */
	$('.popup-youtube').magnificPopup({type:'iframe'});
	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {  
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				}
			}
		}
	});
	 

	
	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 20,
		time: 3000
	});
	
	/*----------------------------
    START - Video
    ------------------------------ */
	if($.fn.YTPlayer){
		$(".player").YTPlayer();
	}
	
	/*----------------------------
    START - Switcher animation
    ------------------------------ */
	$('#toggle-switcher').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'right':'-232px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'right':'0'});
		}
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	jQuery(window).on('load', function(){
		jQuery("#preloader").fadeOut(500);
	});
	
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();

}(jQuery));