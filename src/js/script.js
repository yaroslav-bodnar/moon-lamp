"use strict";
(function() {
	var userAgent = navigator.userAgent.toLowerCase(),
		initialDate = new Date(),
		$document = $(document),
		$window = $(window),
		$html = $("html"),
		$body = $("body"),
		isDesktop = $html.hasClass("desktop"),
		isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		windowReady = false,
		isNoviBuilder = false,
		loaderTimeoutId, plugins = {
			bootstrapTooltip: $("[data-toggle='tooltip']"),
			bootstrapModalDialog: $('.modal'),
			bootstrapTabs: $(".tabs-custom"),
			rdNavbar: $(".rd-navbar"),
			mfp: $('[data-lightbox]').not('[data-lightbox="gallery"] [data-lightbox]'),
			mfpGallery: $('[data-lightbox^="gallery"]'),
			materialParallax: $(".parallax-container"),
			rdMailForm: $(".rd-mailform"),
			rdInputLabel: $(".form-label"),
			regula: $("[data-constraints]"),
			selectFilter: $("select"),
			stepper: $("input[type='number']"),
			wow: $(".wow"),
			owl: $(".owl-carousel"),
			swiper: $(".swiper-slider"),
			search: $(".rd-search"),
			searchResults: $('.rd-search-results'),
			statefulButton: $('.btn-stateful'),
			isotope: $(".isotope-wrap"),
			popover: $('[data-toggle="popover"]'),
			viewAnimate: $('.view-animate'),
			radio: $("input[type='radio']"),
			checkbox: $("input[type='checkbox']"),
			customToggle: $("[data-custom-toggle]"),
			preloader: $(".preloader"),
			captcha: $('.recaptcha'),
			scroller: $(".scroll-wrap"),
			lightGallery: $("[data-lightgallery='group']"),
			lightGalleryItem: $("[data-lightgallery='item']"),
			lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
			mailchimp: $('.mailchimp-mailform'),
			campaignMonitor: $('.campaign-mailform'),
			copyrightYear: $(".copyright-year"),
			layoutToggle: $(".layout-toggle"),
			multitoggle: document.querySelectorAll('[data-multitoggle]'),
			hoverEls: document.querySelectorAll('[data-hover-group]'),
			switcher: $('.switcher-inline'),
			counter: document.querySelectorAll('.counter'),
			progressLinear: document.querySelectorAll('.progress-linear'),
			progressCircle: document.querySelectorAll('.progress-circle'),
			countdown: document.querySelectorAll('.countdown')
		};

		
	function isScrolledIntoView(elem) {
		if (!isNoviBuilder) {
			return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
		} else {
			return true;
		}
	}

	function lazyInit(element, func) {
		$document.on('scroll', function() {
			if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
				func.call();
				element.addClass('lazy-loaded');
			}
		}).trigger("scroll");
	}
	$window.on('load', function() {
		if (plugins.preloader.length && !isNoviBuilder) {
			pageTransition({
				target: document.querySelector('.page'),
				delay: 100,
				duration: 500,
				classIn: 'fadeIn',
				classOut: 'fadeOut',
				classActive: 'animated',
				conditions: function(event, link) {
					return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(link) && !event.currentTarget.hasAttribute('data-lightgallery');
				},
				onTransitionStart: function(options) {
					setTimeout(function() {
						plugins.preloader.removeClass('loaded');
					}, options.duration * .75);
				},
				onReady: function() {
					plugins.preloader.addClass('loaded');
					windowReady = true;
				}
			});
		}
		if (plugins.counter) {
			for (var i = 0; i < plugins.counter.length; i++) {
				var node = plugins.counter[i],
					counter = aCounter({
						node: node,
						duration: node.getAttribute('data-duration') || 1000
					}),
					scrollHandler = (function() {
						if (Util.inViewport(this) && !this.classList.contains('animated-first')) {
							this.counter.run();
							this.classList.add('animated-first');
						}
					}).bind(node),
					blurHandler = (function() {
						this.counter.params.to = parseInt(this.textContent, 10);
						this.counter.run();
					}).bind(node);
				if (isNoviBuilder) {
					node.counter.run();
					node.addEventListener('blur', blurHandler);
				} else {
					scrollHandler();
					window.addEventListener('scroll', scrollHandler);
				}
			}
		}
		if (plugins.progressLinear) {
			for (var i = 0; i < plugins.progressLinear.length; i++) {
				var container = plugins.progressLinear[i],
					counter = aCounter({
						node: container.querySelector('.progress-linear-counter'),
						duration: container.getAttribute('data-duration') || 1000,
						onStart: function() {
							this.custom.bar.style.width = this.params.to + '%';
						}
					});
				counter.custom = {
					container: container,
					bar: container.querySelector('.progress-linear-bar'),
					onScroll: (function() {
						if ((Util.inViewport(this.custom.container) && !this.custom.container.classList.contains('animated')) || isNoviBuilder) {
							this.run();
							this.custom.container.classList.add('animated');
						}
					}).bind(counter),
					onBlur: (function() {
						this.params.to = parseInt(this.params.node.textContent, 10);
						this.run();
					}).bind(counter)
				};
				if (isNoviBuilder) {
					counter.run();
					counter.params.node.addEventListener('blur', counter.custom.onBlur);
				} else {
					counter.custom.onScroll();
					document.addEventListener('scroll', counter.custom.onScroll);
				}
			}
		}
		if (plugins.progressCircle) {
			for (var i = 0; i < plugins.progressCircle.length; i++) {
				var container = plugins.progressCircle[i],
					counter = aCounter({
						node: container.querySelector('.progress-circle-counter'),
						duration: 500,
						onUpdate: function(value) {
							this.custom.bar.render(value * 3.6);
						}
					});
				counter.params.onComplete = counter.params.onUpdate;
				counter.custom = {
					container: container,
					bar: aProgressCircle({
						node: container.querySelector('.progress-circle-bar')
					}),
					onScroll: (function() {
						if (Util.inViewport(this.custom.container) && !this.custom.container.classList.contains('animated')) {
							this.run();
							this.custom.container.classList.add('animated');
						}
					}).bind(counter),
					onBlur: (function() {
						this.params.to = parseInt(this.params.node.textContent, 10);
						this.run();
					}).bind(counter)
				};
				if (isNoviBuilder) {
					counter.run();
					counter.params.node.addEventListener('blur', counter.custom.onBlur);
				} else {
					counter.custom.onScroll();
					window.addEventListener('scroll', counter.custom.onScroll);
				}
			}
		}
		if (plugins.isotope.length) {
			for (var i = 0; i < plugins.isotope.length; i++) {
				var wrap = plugins.isotope[i],
					filterHandler = function(event) {
						event.preventDefault();
						for (var n = 0; n < this.isoGroup.filters.length; n++) this.isoGroup.filters[n].classList.remove('active');
						this.classList.add('active');
						this.isoGroup.isotope.arrange({
							filter: this.getAttribute("data-isotope-filter") !== '*' ? '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]' : '*'
						});
					},
					resizeHandler = function() {
						this.isoGroup.isotope.layout();
					};
				wrap.isoGroup = {};
				wrap.isoGroup.filters = wrap.querySelectorAll('[data-isotope-filter]');
				wrap.isoGroup.node = wrap.querySelector('.isotope');
				wrap.isoGroup.layout = wrap.isoGroup.node.getAttribute('data-isotope-layout') ? wrap.isoGroup.node.getAttribute('data-isotope-layout') : 'masonry';
				wrap.isoGroup.isotope = new Isotope(wrap.isoGroup.node, {
					itemSelector: '.isotope-item',
					layoutMode: wrap.isoGroup.layout,
					filter: '*',
				});
				for (var n = 0; n < wrap.isoGroup.filters.length; n++) {
					var filter = wrap.isoGroup.filters[n];
					filter.isoGroup = wrap.isoGroup;
					filter.addEventListener('click', filterHandler);
				}
				window.addEventListener('resize', resizeHandler.bind(wrap));
			}
		}
		if (plugins.materialParallax.length) {
			if (!isNoviBuilder && !isIE && !isMobile) {
				plugins.materialParallax.parallax();
			} else {
				for (var i = 0; i < plugins.materialParallax.length; i++) {
					var $parallax = $(plugins.materialParallax[i]);
					$parallax.addClass('parallax-disabled');
					$parallax.css({
						"background-image": 'url(' + $parallax.data("parallax-img") + ')'
					});
				}
			}
		}
	});
	$(function() {
		isNoviBuilder = window.xMode;

		function setBackgrounds(swiper) {
			var swiperBg = swiper.el.querySelectorAll('[data-slide-bg]');
			for (var i = 0; i < swiperBg.length; i++) {
				swiperBg[i].style.backgroundImage = 'url(' + swiperBg[i].getAttribute('data-slide-bg') + ')';
			}
		}

		function initCaptionAnimate(swiper) {
			var animate = function(caption) {
					return function() {
						var duration;
						if (duration = caption.getAttribute('data-caption-duration')) caption.style.animationDuration = duration + 'ms';
						caption.classList.remove('not-animated');
						caption.classList.add(caption.getAttribute('data-caption-animate'));
						caption.classList.add('animated');
					};
				},
				initializeAnimation = function(captions) {
					for (var i = 0; i < captions.length; i++) {
						var caption = captions[i];
						caption.classList.remove('animated');
						caption.classList.remove(caption.getAttribute('data-caption-animate'));
						caption.classList.add('not-animated');
					}
				},
				finalizeAnimation = function(captions) {
					for (var i = 0; i < captions.length; i++) {
						var caption = captions[i];
						if (caption.getAttribute('data-caption-delay')) {
							setTimeout(animate(caption), Number(caption.getAttribute('data-caption-delay')));
						} else {
							animate(caption)();
						}
					}
				};
			swiper.params.caption = {
				animationEvent: 'slideChangeTransitionEnd'
			};
			initializeAnimation(swiper.$wrapperEl[0].querySelectorAll('[data-caption-animate]'));
			finalizeAnimation(swiper.$wrapperEl[0].children[swiper.activeIndex].querySelectorAll('[data-caption-animate]'));
			if (swiper.params.caption.animationEvent === 'slideChangeTransitionEnd') {
				swiper.on(swiper.params.caption.animationEvent, function() {
					initializeAnimation(swiper.$wrapperEl[0].children[swiper.previousIndex].querySelectorAll('[data-caption-animate]'));
					finalizeAnimation(swiper.$wrapperEl[0].children[swiper.activeIndex].querySelectorAll('[data-caption-animate]'));
				});
			} else {
				swiper.on('slideChangeTransitionEnd', function() {
					initializeAnimation(swiper.$wrapperEl[0].children[swiper.previousIndex].querySelectorAll('[data-caption-animate]'));
				});
				swiper.on(swiper.params.caption.animationEvent, function() {
					finalizeAnimation(swiper.$wrapperEl[0].children[swiper.activeIndex].querySelectorAll('[data-caption-animate]'));
				});
			}
		}

		function updSwiperNumericPagination() {
			this.el.querySelector('.swiper-counter').innerHTML = '<span class="count">' + formatIndex((this.realIndex + 1)) + '</span>/<span class="total">' + formatIndex((this.el.slidesQuantity)) + '</span>';
		}

		function formatIndex(index) {
			return index < 10 ? '0' + index : index;
		}

		function initOwlCarousel(c) {
			var aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"],
				values = [0, 576, 768, 992, 1200, 1600],
				responsive = {};
			for (var j = 0; j < values.length; j++) {
				responsive[values[j]] = {};
				for (var k = j; k >= -1; k--) {
					if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
						responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
					}
					if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
						responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
					}
					if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
						responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
					}
				}
			}
			if (c.attr('data-dots-custom')) {
				c.on("initialized.owl.carousel", function(event) {
					var carousel = $(event.currentTarget),
						customPag = $(carousel.attr("data-dots-custom")),
						active = 0;
					if (carousel.attr('data-active')) {
						active = parseInt(carousel.attr('data-active'), 10);
					}
					carousel.trigger('to.owl.carousel', [active, 300, true]);
					customPag.find("[data-owl-item='" + active + "']").addClass("active");
					customPag.find("[data-owl-item]").on('click', function(e) {
						e.preventDefault();
						carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
					});
					carousel.on("translate.owl.carousel", function(event) {
						customPag.find(".active").removeClass("active");
						customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
					});
				});
			}
			c.on("initialized.owl.carousel", function() {
				initLightGalleryItem(c.find('[data-lightgallery="item"]'), 'lightGallery-in-carousel');
			});
			c.owlCarousel({
				autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
				loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
				items: 1,
				center: c.attr("data-center") === "true",
				dotsContainer: c.attr("data-pagination-class") || false,
				navContainer: c.attr("data-navigation-class") || false,
				mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
				nav: c.attr("data-nav") === "true",
				dots: c.attr("data-dots") === "true",
				dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
				animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
				animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
				responsive: responsive,
				navText: function() {
					try {
						return JSON.parse(c.attr("data-nav-text"));
					} catch (e) {
						return [];
					}
				}(),
				navClass: function() {
					try {
						return JSON.parse(c.attr("data-nav-class"));
					} catch (e) {
						return ['owl-prev', 'owl-next'];
					}
				}()
			});
		}

		// function liveSearch(options) {
		// 	$('#' + options.live).removeClass('cleared').html();
		// 	options.current++;
		// 	options.spin.addClass('loading');
		// 	$.get(handler, {
		// 		s: decodeURI(options.term),
		// 		liveSearch: options.live,
		// 		dataType: "html",
		// 		liveCount: options.liveCount,
		// 		filter: options.filter,
		// 		template: options.template
		// 	}, function(data) {
		// 		options.processed++;
		// 		var live = $('#' + options.live);
		// 		if ((options.processed === options.current) && !live.hasClass('cleared')) {
		// 			live.find('> #search-results').removeClass('active');
		// 			live.html(data);
		// 			setTimeout(function() {
		// 				live.find('> #search-results').addClass('active');
		// 			}, 50);
		// 		}
		// 		options.spin.parents('.rd-search').find('.input-group-addon').removeClass('loading');
		// 	})
		// }

		function attachFormValidator(elements) {
			regula.custom({
				name: 'PhoneNumber',
				defaultMessage: 'Invalid phone number format',
				validator: function() {
					if (this.value === '') return true;
					else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value);
				}
			});
			for (var i = 0; i < elements.length; i++) {
				var o = $(elements[i]),
					v;
				o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
				v = o.parent().find(".form-validation");
				if (v.is(":last-child")) o.addClass("form-control-last-child");
			}
			elements.on('input change propertychange blur', function(e) {
				var $this = $(this),
					results;
				if (e.type !== "blur")
					if (!$this.parent().hasClass("has-error")) return;
				if ($this.parents('.rd-mailform').hasClass('success')) return;
				if ((results = $this.regula('validate')).length) {
					for (i = 0; i < results.length; i++) {
						$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error");
					}
				} else {
					$this.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			}).regula('bind');
			var regularConstraintsMessages = [{
				type: regula.Constraint.Required,
				newMessage: "Заполните поля ввода"
			}, {
				type: regula.Constraint.Email,
				newMessage: "Адрес электронной почты не является действительным"
			}, {
				type: regula.Constraint.Numeric,
				newMessage: "Поле для ввода цифр"
			}, {
				type: regula.Constraint.Selected,
				newMessage: "Пожалуйста сделайте выбор"
			}];
			for (var i = 0; i < regularConstraintsMessages.length; i++) {
				var regularConstraint = regularConstraintsMessages[i];
				regula.override({
					constraintType: regularConstraint.type,
					defaultMessage: regularConstraint.newMessage
				});
			}
		}

		function isValidated(elements, captcha) {
			var results, errors = 0;
			if (elements.length) {
				for (var j = 0; j < elements.length; j++) {
					var $input = $(elements[j]);
					if ((results = $input.regula('validate')).length) {
						for (k = 0; k < results.length; k++) {
							errors++;
							$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
						}
					} else {
						$input.siblings(".form-validation").text("").parent().removeClass("has-error")
					}
				}
				if (captcha) {
					if (captcha.length) {
						return validateReCaptcha(captcha) && errors === 0
					}
				}
				return errors === 0;
			}
			return true;
		}

		function validateReCaptcha(captcha) {
			var captchaToken = captcha.find('.g-recaptcha-response').val();
			if (captchaToken.length === 0) {
				captcha.siblings('.form-validation').html('Please, prove that you are not robot.').addClass('active');
				captcha.closest('.form-wrap').addClass('has-error');
				captcha.on('propertychange', function() {
					var $this = $(this),
						captchaToken = $this.find('.g-recaptcha-response').val();
					if (captchaToken.length > 0) {
						$this.closest('.form-wrap').removeClass('has-error');
						$this.siblings('.form-validation').removeClass('active').html('');
						$this.off('propertychange');
					}
				});
				return false;
			}
			return true;
		}
		window.onloadCaptchaCallback = function() {
			for (var i = 0; i < plugins.captcha.length; i++) {
				var $capthcaItem = $(plugins.captcha[i]);
				grecaptcha.render($capthcaItem.attr('id'), {
					sitekey: $capthcaItem.attr('data-sitekey'),
					size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal',
					theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light',
					callback: function(e) {
						$('.recaptcha').trigger('propertychange');
					}
				});
				$capthcaItem.after("<span class='form-validation'></span>");
			}
		};

		function initBootstrapTooltip(tooltipPlacement) {
			plugins.bootstrapTooltip.tooltip('dispose');
			if (window.innerWidth < 576) {
				plugins.bootstrapTooltip.tooltip({
					placement: 'bottom'
				});
			} else {
				plugins.bootstrapTooltip.tooltip({
					placement: tooltipPlacement
				});
			}
		}

		function initLightGallery(itemsToInit, addClass) {
			if (!isNoviBuilder) {
				$(itemsToInit).lightGallery({
					thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
					selector: "[data-lightgallery='item']",
					autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
					pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
					addClass: addClass,
					mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
					loop: $(itemsToInit).attr("data-lg-loop") !== "false"
				});
			}
		}

		function initDynamicLightGallery(itemsToInit, addClass) {
			if (!isNoviBuilder) {
				$(itemsToInit).on("click", function() {
					$(itemsToInit).lightGallery({
						thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
						selector: "[data-lightgallery='item']",
						autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
						pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
						addClass: addClass,
						mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
						loop: $(itemsToInit).attr("data-lg-loop") !== "false",
						dynamic: true,
						dynamicEl: JSON.parse($(itemsToInit).attr("data-lg-dynamic-elements")) || []
					});
				});
			}
		}

		function initLightGalleryItem(itemToInit, addClass) {
			if (!isNoviBuilder) {
				$(itemToInit).lightGallery({
					selector: "this",
					addClass: addClass,
					counter: false,
					youtubePlayerParams: {
						modestbranding: 1,
						showinfo: 0,
						rel: 0,
						controls: 0
					},
					vimeoPlayerParams: {
						byline: 0,
						portrait: 0
					}
				});
			}
		}
		if (plugins.captcha.length) {
			$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
		}
		if (navigator.platform.match(/(Mac)/i)) {
			$html.addClass("mac-os");
		}
		if (isIE) {
			if (isIE < 10) {
				$html.addClass("lt-ie-10");
			}
			if (isIE < 11) {
				$.getScript('js/pointer-events.min.js').done(function() {
					$html.addClass("ie-10");
					PointerEventsPolyfill.initialize({});
				});
			}
			if (isIE === 11) {
				$html.addClass("ie-11");
			}
			if (isIE === 12) {
				$html.addClass("ie-edge");
			}
		}
		if (plugins.bootstrapTooltip.length) {
			var tooltipPlacement = plugins.bootstrapTooltip.attr('data-placement');
			initBootstrapTooltip(tooltipPlacement);
			$window.on('resize orientationchange', function() {
				initBootstrapTooltip(tooltipPlacement);
			})
		}
		if (plugins.bootstrapModalDialog.length) {
			for (var i = 0; i < plugins.bootstrapModalDialog.length; i++) {
				var modalItem = $(plugins.bootstrapModalDialog[i]);
				modalItem.on('hidden.bs.modal', $.proxy(function() {
					var activeModal = $(this),
						rdVideoInside = activeModal.find('video'),
						youTubeVideoInside = activeModal.find('iframe');
					if (rdVideoInside.length) {
						rdVideoInside[0].pause();
					}
					if (youTubeVideoInside.length) {
						var videoUrl = youTubeVideoInside.attr('src');
						youTubeVideoInside.attr('src', '').attr('src', videoUrl);
					}
				}, modalItem))
			}
		}
		if (plugins.popover.length) {
			if (window.innerWidth < 767) {
				plugins.popover.attr('data-placement', 'bottom');
				plugins.popover.popover();
			} else {
				plugins.popover.popover();
			}
		}
		if (plugins.statefulButton.length) {
			$(plugins.statefulButton).on('click', function() {
				var statefulButtonLoading = $(this).button('loading');
				setTimeout(function() {
					statefulButtonLoading.button('reset')
				}, 2000);
			})
		}
		if (plugins.bootstrapTabs.length) {
			for (var i = 0; i < plugins.bootstrapTabs.length; i++) {
				var bootstrapTabsItem = $(plugins.bootstrapTabs[i]);
				if (bootstrapTabsItem.find('.slick-slider').length) {
					bootstrapTabsItem.find('.tabs-custom-list > li > a').on('click', $.proxy(function() {
						var $this = $(this);
						var setTimeOutTime = isNoviBuilder ? 1500 : 300;
						setTimeout(function() {
							$this.find('.tab-content .tab-pane.active .slick-slider').slick('setPosition');
						}, setTimeOutTime);
					}, bootstrapTabsItem));
				}
			}
		}
		if (plugins.copyrightYear.length) {
			plugins.copyrightYear.text(initialDate.getFullYear());
		}
		if (plugins.preloader.length) {
			loaderTimeoutId = setTimeout(function() {
				if (!windowReady && !isNoviBuilder) plugins.preloader.removeClass('loaded');
			}, 2000);
		}
		if (plugins.radio.length) {
			for (var i = 0; i < plugins.radio.length; i++) {
				$(plugins.radio[i]).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
			}
		}
		if (plugins.checkbox.length) {
			for (var i = 0; i < plugins.checkbox.length; i++) {
				$(plugins.checkbox[i]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
			}
		}
		if (isDesktop && !isNoviBuilder) {
			$().UItoTop({
				text: 'Back To Top',
				easingType: 'easeOutQuad',
				containerClass: 'ui-to-top'
			});
		}
		if (plugins.owl.length) {
			for (var i = 0; i < plugins.owl.length; i++) {
				var c = $(plugins.owl[i]);
				plugins.owl[i].owl = c;
				initOwlCarousel(c);
			}
		}
		if (plugins.rdNavbar.length) {
			var aliaces, i, j, len, value, values, responsiveNavbar;
			aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"];
			values = [0, 576, 768, 992, 1200, 1600];
			responsiveNavbar = {};
			for (i = j = 0, len = values.length; j < len; i = ++j) {
				value = values[i];
				if (!responsiveNavbar[values[i]]) {
					responsiveNavbar[values[i]] = {};
				}
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'layout')) {
					responsiveNavbar[values[i]].layout = plugins.rdNavbar.attr('data' + aliaces[i] + 'layout');
				}
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout')) {
					responsiveNavbar[values[i]]['deviceLayout'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout');
				}
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on')) {
					responsiveNavbar[values[i]]['focusOnHover'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on') === 'true';
				}
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height')) {
					responsiveNavbar[values[i]]['autoHeight'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height') === 'true';
				}
				if (isNoviBuilder) {
					responsiveNavbar[values[i]]['stickUp'] = false;
				} else if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up')) {
					responsiveNavbar[values[i]]['stickUp'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up') === 'true';
				}
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset')) {
					responsiveNavbar[values[i]]['stickUpOffset'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset');
				}
			}
			plugins.rdNavbar.RDNavbar({
				anchorNav: !isNoviBuilder,
				stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
				responsive: responsiveNavbar,
				callbacks: {
					onStuck: function() {
						var navbarSearch = this.$element.find('.rd-search input');
						if (navbarSearch) {
							navbarSearch.val('').trigger('propertychange');
						}
					},
					onDropdownOver: function() {
						return !isNoviBuilder;
					},
					onUnstuck: function() {
						if (this.$clone === null) return;
						var navbarSearch = this.$clone.find('.rd-search input');
						if (navbarSearch) {
							navbarSearch.val('').trigger('propertychange');
							navbarSearch.trigger('blur');
						}
					}
				}
			});
			if (plugins.rdNavbar.attr("data-body-class")) {
				document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
			}
		}
		if (plugins.search.length || plugins.searchResults) {
			var handler = "bat/rd-search.php";
			var defaultTemplate = '<h6 class="search-title"><a target="_top" href="#{href}" class="search-link">#{title}</a></h6>' + '<p>...#{token}...</p>' + '<p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';
			var defaultFilter = '*.html';
			if (plugins.search.length) {
				for (var i = 0; i < plugins.search.length; i++) {
					var searchItem = $(plugins.search[i]),
						options = {
							element: searchItem,
							filter: (searchItem.attr('data-search-filter')) ? searchItem.attr('data-search-filter') : defaultFilter,
							template: (searchItem.attr('data-search-template')) ? searchItem.attr('data-search-template') : defaultTemplate,
							live: (searchItem.attr('data-search-live')) ? searchItem.attr('data-search-live') : false,
							liveCount: (searchItem.attr('data-search-live-count')) ? parseInt(searchItem.attr('data-search-live'), 10) : 4,
							current: 0,
							processed: 0,
							timer: {}
						};
					var $toggle = $('.rd-navbar-search-toggle');
					if ($toggle.length) {
						$toggle.on('click', (function(searchItem) {
							return function() {
								if (!($(this).hasClass('active'))) {
									searchItem.find('input').val('').trigger('propertychange');
								}
							}
						})(searchItem));
					}
					if (options.live) {
						var clearHandler = false;
						searchItem.find('input').on("input propertychange", $.proxy(function() {
							this.term = this.element.find('input').val().trim();
							this.spin = this.element.find('.input-group-addon');
							clearTimeout(this.timer);
							if (this.term.length > 2) {
								this.timer = setTimeout(liveSearch(this), 200);
								if (clearHandler === false) {
									clearHandler = true;
									$body.on("click", function(e) {
										if ($(e.toElement).parents('.rd-search').length === 0) {
											$('#rd-search-results-live').addClass('cleared').html('');
										}
									})
								}
							} else if (this.term.length === 0) {
								$('#' + this.live).addClass('cleared').html('');
							}
						}, options, this));
					}
					searchItem.submit($.proxy(function() {
						$('<input />').attr('type', 'hidden').attr('name', "filter").attr('value', this.filter).appendTo(this.element);
						return true;
					}, options, this))
				}
			}
			if (plugins.searchResults.length) {
				var regExp = /\?.*s=([^&]+)\&filter=([^&]+)/g;
				var match = regExp.exec(location.search);
				if (match !== null) {
					$.get(handler, {
						s: decodeURI(match[1]),
						dataType: "html",
						filter: match[2],
						template: defaultTemplate,
						live: ''
					}, function(data) {
						plugins.searchResults.html(data);
					})
				}
			}
		}
		if (plugins.viewAnimate.length) {
			for (var i = 0; i < plugins.viewAnimate.length; i++) {
				var $view = $(plugins.viewAnimate[i]).not('.active');
				$document.on("scroll", $.proxy(function() {
					if (isScrolledIntoView(this)) {
						this.addClass("active");
					}
				}, $view)).trigger("scroll");
			}
		}
		if (plugins.swiper.length) {
			for (var i = 0; i < plugins.swiper.length; i++) {
				let sliderMarkup = plugins.swiper[i],
					callbacks = [],
					options = {
						loop: sliderMarkup.getAttribute('data-loop') === 'true' || false,
						loopedSlides: sliderMarkup.hasAttribute('data-looped-slides') ? Number(sliderMarkup.hasAttribute('data-looped-slides')) : null,
						effect: isIE ? 'slide' : sliderMarkup.getAttribute('data-slide-effect') || 'slide',
						direction: sliderMarkup.getAttribute('data-direction') || 'horizontal',
						speed: sliderMarkup.getAttribute('data-speed') ? Number(sliderMarkup.getAttribute('data-speed')) : 1000,
						slidesPerView: sliderMarkup.getAttribute('data-slides-per-view') ? Number(sliderMarkup.getAttribute('data-slides-per-view')) : 1,
						spaceBetween: sliderMarkup.getAttribute('data-space-between') ? Number(sliderMarkup.getAttribute('data-space-between')) : 0
					};
				if (sliderMarkup.getAttribute('data-autoplay')) {
					options.autoplay = {
						delay: Number(sliderMarkup.getAttribute('data-autoplay')) || 3000,
						stopOnLastSlide: false,
						disableOnInteraction: true,
						reverseDirection: false,
					};
				}
				if (sliderMarkup.getAttribute('data-keyboard') === 'true') {
					options.keyboard = {
						enabled: sliderMarkup.getAttribute('data-keyboard') === 'true',
						onlyInViewport: true
					};
				}
				if (sliderMarkup.getAttribute('data-mousewheel') === 'true') {
					options.mousewheel = {
						releaseOnEdges: true,
						sensitivity: .1
					};
				}
				if (sliderMarkup.hasAttribute('data-secondary')) {
					options.watchSlidesVisibility = true;
					options.watchSlidesProgress = true;
				}
				if (sliderMarkup.querySelector('.swiper-button-next, .swiper-button-prev')) {
					options.navigation = {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					};
				}
				if (sliderMarkup.querySelector('.swiper-scrollbar')) {
					options.scrollbar = {
						el: '.swiper-scrollbar',
						hide: true,
						draggable: true
					};
				}
				if (sliderMarkup.querySelector('.swiper-pagination')) {
					options.pagination = {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true
					};
				}
				if (sliderMarkup.querySelector('.swiper-pagination-progressbar')) {
					options.pagination = {
						el: '.swiper-pagination-progressbar',
						type: 'progressbar'
					};
				}
				if (sliderMarkup.querySelector('.swiper-counter')) {
					sliderMarkup.slidesQuantity = sliderMarkup.querySelectorAll('.swiper-slide').length;
					callbacks.push(updSwiperNumericPagination);
				}
				options.on = {
					init: function() {
						this.el.dispatchEvent(new CustomEvent('swiper:init'));
						setBackgrounds(this);
						initCaptionAnimate(this);
						callbacks.forEach((function(callback) {
							callback.call(this);
						}).bind(this));
					},
					slideChange: function() {
						callbacks.forEach((function(callback) {
							callback.call(this);
						}).bind(this));
					}
				};
				if (sliderMarkup.hasAttribute('data-thumb')) {
					let secondary = document.querySelector(sliderMarkup.getAttribute('data-thumb'));
					if (secondary.swiper) {
						options.thumbs = {
							swiper: secondary.swiper
						};
						new Swiper(sliderMarkup, options);
					} else {
						secondary.addEventListener('swiper:init', function() {
							options.thumbs = {
								swiper: secondary.swiper
							};
							new Swiper(sliderMarkup, options);
						});
					}
				} else {
					new Swiper(plugins.swiper[i], options);
				}
			}
		}
		if ($html.hasClass("wow-animation") && plugins.wow.length && !isNoviBuilder && isDesktop) {
			new WOW().init();
		}
		if (plugins.rdInputLabel.length) {
			plugins.rdInputLabel.RDInputLabel();
		}
		if (plugins.regula.length) {
			attachFormValidator(plugins.regula);
		}
		if (plugins.mailchimp.length) {
			for (i = 0; i < plugins.mailchimp.length; i++) {
				var $mailchimpItem = $(plugins.mailchimp[i]),
					$email = $mailchimpItem.find('input[type="email"]');
				$mailchimpItem.attr('novalidate', 'true');
				$email.attr('name', 'EMAIL');
				$mailchimpItem.on('submit', $.proxy(function($email, event) {
					event.preventDefault();
					var $this = this;
					var data = {},
						url = $this.attr('action').replace('/post?', '/post-json?').concat('&c=?'),
						dataArray = $this.serializeArray(),
						$output = $("#" + $this.attr("data-form-output"));
					for (i = 0; i < dataArray.length; i++) {
						data[dataArray[i].name] = dataArray[i].value;
					}
					$.ajax({
						data: data,
						url: url,
						dataType: 'jsonp',
						error: function(resp, text) {
							$output.html('Server error: ' + text);
							setTimeout(function() {
								$output.removeClass("active");
							}, 4000);
						},
						success: function(resp) {
							$output.html(resp.msg).addClass('active');
							$email[0].value = '';
							var $label = $('[for="' + $email.attr('id') + '"]');
							if ($label.length) $label.removeClass('focus not-empty');
							setTimeout(function() {
								$output.removeClass("active");
							}, 6000);
						},
						beforeSend: function(data) {
							var isNoviBuilder = window.xMode;
							var isValidated = (function() {
								var results, errors = 0;
								var elements = $this.find('[data-constraints]');
								var captcha = null;
								if (elements.length) {
									for (var j = 0; j < elements.length; j++) {
										var $input = $(elements[j]);
										if ((results = $input.regula('validate')).length) {
											for (var k = 0; k < results.length; k++) {
												errors++;
												$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
											}
										} else {
											$input.siblings(".form-validation").text("").parent().removeClass("has-error")
										}
									}
									if (captcha) {
										if (captcha.length) {
											return validateReCaptcha(captcha) && errors === 0
										}
									}
									return errors === 0;
								}
								return true;
							})();
							if (isNoviBuilder || !isValidated) return false;
							$output.html('Submitting...').addClass('active');
						}
					});
					return false;
				}, $mailchimpItem, $email));
			}
		}
		if (plugins.campaignMonitor.length) {
			for (i = 0; i < plugins.campaignMonitor.length; i++) {
				var $campaignItem = $(plugins.campaignMonitor[i]);
				$campaignItem.on('submit', $.proxy(function(e) {
					var data = {},
						url = this.attr('action'),
						dataArray = this.serializeArray(),
						$output = $("#" + plugins.campaignMonitor.attr("data-form-output")),
						$this = $(this);
					for (i = 0; i < dataArray.length; i++) {
						data[dataArray[i].name] = dataArray[i].value;
					}
					$.ajax({
						data: data,
						url: url,
						dataType: 'jsonp',
						error: function(resp, text) {
							$output.html('Server error: ' + text);
							setTimeout(function() {
								$output.removeClass("active");
							}, 4000);
						},
						success: function(resp) {
							$output.html(resp.Message).addClass('active');
							setTimeout(function() {
								$output.removeClass("active");
							}, 6000);
						},
						beforeSend: function(data) {
							if (isNoviBuilder || !isValidated($this.find('[data-constraints]'))) return false;
							$output.html('Submitting...').addClass('active');
						}
					});
					var inputs = $this[0].getElementsByTagName('input');
					for (var i = 0; i < inputs.length; i++) {
						inputs[i].value = '';
						var label = document.querySelector('[for="' + inputs[i].getAttribute('id') + '"]');
						if (label) label.classList.remove('focus', 'not-empty');
					}
					return false;
				}, $campaignItem));
			}
		}
		if (plugins.rdMailForm.length) {
			var i, j, k, msg = {
				'MF000': 'Successfully sent!',
				'MF001': 'Recipients are not set!',
				'MF002': 'Form will not work locally!',
				'MF003': 'Please, define email field in your form!',
				'MF004': 'Please, define type of your form!',
				'MF254': 'Something went wrong with PHPMailer!',
				'MF255': 'Aw, snap! Something went wrong.'
			};
			for (i = 0; i < plugins.rdMailForm.length; i++) {
				var $form = $(plugins.rdMailForm[i]),
					formHasCaptcha = false;
				$form.attr('novalidate', 'novalidate').ajaxForm({
					data: {
						"form-type": $form.attr("data-form-type") || "contact",
						"counter": i
					},
					beforeSubmit: function(arr, $form, options) {
						if (isNoviBuilder) return;
						var form = $(plugins.rdMailForm[this.extraData.counter]),
							inputs = form.find("[data-constraints]"),
							output = $("#" + form.attr("data-form-output")),
							captcha = form.find('.recaptcha'),
							captchaFlag = true;
						output.removeClass("active error success");
						if (isValidated(inputs, captcha)) {
							if (captcha.length) {
								var captchaToken = captcha.find('.g-recaptcha-response').val(),
									captchaMsg = {
										'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
										'CPT002': 'Something wrong with google reCaptcha'
									};
								formHasCaptcha = true;
								$.ajax({
									method: "POST",
									url: "bat/reCaptcha.php",
									data: {
										'g-recaptcha-response': captchaToken
									},
									async: false
								}).done(function(responceCode) {
									if (responceCode !== 'CPT000') {
										if (output.hasClass("snackbars")) {
											output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')
											setTimeout(function() {
												output.removeClass("active");
											}, 3500);
											captchaFlag = false;
										} else {
											output.html(captchaMsg[responceCode]);
										}
										output.addClass("active");
									}
								});
							}
							if (!captchaFlag) {
								return false;
							}
							form.addClass('form-in-process');
							if (output.hasClass("snackbars")) {
								output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
								output.addClass("active");
							}
						} else {
							return false;
						}
					},
					error: function(result) {
						if (isNoviBuilder) return;
						var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")),
							form = $(plugins.rdMailForm[this.extraData.counter]);
						output.text(msg[result]);
						form.removeClass('form-in-process');
						if (formHasCaptcha) {
							grecaptcha.reset();
						}
					},
					success: function(result) {
						if (isNoviBuilder) return;
						var form = $(plugins.rdMailForm[this.extraData.counter]),
							output = $("#" + form.attr("data-form-output")),
							select = form.find('select');
						form.addClass('success').removeClass('form-in-process');
						if (formHasCaptcha) {
							grecaptcha.reset();
						}
						result = result.length === 5 ? result : 'MF255';
						output.text(msg[result]);
						if (result === "MF000") {
							if (output.hasClass("snackbars")) {
								output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
							} else {
								output.addClass("active success");
							}
						} else {
							if (output.hasClass("snackbars")) {
								output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
							} else {
								output.addClass("active error");
							}
						}
						form.clearForm();
						if (select.length) {
							select.select2("val", "");
						}
						form.find('input, textarea').trigger('blur');
						setTimeout(function() {
							output.removeClass("active error success");
							form.removeClass('success');
						}, 3500);
					}
				});
			}
		}
		if (plugins.lightGallery.length) {
			for (var i = 0; i < plugins.lightGallery.length; i++) {
				initLightGallery(plugins.lightGallery[i]);
			}
		}
		if (plugins.lightGalleryItem.length) {
			var notCarouselItems = [];
			for (var z = 0; z < plugins.lightGalleryItem.length; z++) {
				if (!$(plugins.lightGalleryItem[z]).parents('.owl-carousel').length && !$(plugins.lightGalleryItem[z]).parents('.swiper-slider').length && !$(plugins.lightGalleryItem[z]).parents('.slick-slider').length) {
					notCarouselItems.push(plugins.lightGalleryItem[z]);
				}
			}
			plugins.lightGalleryItem = notCarouselItems;
			for (var i = 0; i < plugins.lightGalleryItem.length; i++) {
				initLightGalleryItem(plugins.lightGalleryItem[i]);
			}
		}
		if (plugins.lightDynamicGalleryItem.length) {
			for (var i = 0; i < plugins.lightDynamicGalleryItem.length; i++) {
				initDynamicLightGallery(plugins.lightDynamicGalleryItem[i]);
			}
		}
		if (plugins.customToggle.length) {
			for (var i = 0; i < plugins.customToggle.length; i++) {
				var $this = $(plugins.customToggle[i]);
				$this.on('click', $.proxy(function(event) {
					event.preventDefault();
					var $ctx = $(this);
					$($ctx.attr('data-custom-toggle')).add(this).toggleClass('active');
				}, $this));
				if ($this.attr("data-custom-toggle-hide-on-blur") === "true") {
					$body.on("click", $this, function(e) {
						if (e.target !== e.data[0] && $(e.data.attr('data-custom-toggle')).find($(e.target)).length && e.data.find($(e.target)).length === 0) {
							$(e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
						}
					})
				}
				if ($this.attr("data-custom-toggle-disable-on-blur") === "true") {
					$body.on("click", $this, function(e) {
						if (e.target !== e.data[0] && $(e.data.attr('data-custom-toggle')).find($(e.target)).length === 0 && e.data.find($(e.target)).length === 0) {
							$(e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
						}
					})
				}
			}
		}
		if (plugins.layoutToggle.length) {
			for (var i = 0; i < plugins.layoutToggle.length; i++) {
				var $layoutToggleElement = $(plugins.layoutToggle[i]);
				$layoutToggleElement.on('click', function() {
					sessionStorage.setItem('pageLayoutBoxed', !(sessionStorage.getItem('pageLayoutBoxed') === "true"));
					$html.toggleClass('boxed');
					$window.trigger('resize');
				});
			}
			if (sessionStorage.getItem('pageLayoutBoxed') === "true") {
				plugins.layoutToggle.attr('checked', true);
				$html.addClass('boxed');
				$window.trigger('resize');
			}
			var themeResetButton = document.querySelectorAll('[data-theme-reset]');
			if (themeResetButton) {
				for (var z = 0; z < themeResetButton.length; z++) {
					themeResetButton[z].addEventListener('click', function() {
						sessionStorage.setItem('pageLayoutBoxed', false);
						plugins.layoutToggle.attr('checked', false);
						$html.removeClass('boxed');
						$window.trigger('resize');
					});
				}
			}
		}
		if (plugins.selectFilter.length) {
			var i;
			for (i = 0; i < plugins.selectFilter.length; i++) {
				var select = $(plugins.selectFilter[i]),
					selectStyle = 'html-' + select.attr('data-style') + '-select';
				$html.addClass(selectStyle);
				select.select2({
					placeholder: select.attr("data-placeholder") ? select.attr("data-placeholder") : false,
					minimumResultsForSearch: select.attr("data-minimum-results-search") ? select.attr("data-minimum-results-search") : -1,
					maximumSelectionSize: 3
				});
			}
		}
		if (plugins.stepper.length) {
			plugins.stepper.stepper({
				labels: {
					up: "",
					down: ""
				}
			});
		}
		if (plugins.multitoggle.length) {
			multitoggles();
		}
		for (var i = 0; i < plugins.hoverEls.length; i++) {
			var hel = plugins.hoverEls[i];
			hel.addEventListener('mouseenter', function(event) {
				var hoverGroupName = event.target.getAttribute('data-hover-group'),
					hoverGroup = document.querySelectorAll('[data-hover-group="' + hoverGroupName + '"]');
				for (var e = 0; e < hoverGroup.length; e++) hoverGroup[e].classList.add('active');
			});
			hel.addEventListener('mouseleave', function(event) {
				var hoverGroupName = event.target.getAttribute('data-hover-group'),
					hoverGroup = document.querySelectorAll('[data-hover-group="' + hoverGroupName + '"]');
				for (var e = 0; e < hoverGroup.length; e++) hoverGroup[e].classList.remove('active');
			});
		}
		if (!isNoviBuilder && (plugins.mfp.length || plugins.mfpGallery.length)) {
			if (plugins.mfp.length) {
				for (var i = 0; i < plugins.mfp.length; i++) {
					var mfpItem = plugins.mfp[i];
					$(mfpItem).magnificPopup({
						type: mfpItem.getAttribute("data-lightbox")
					});
				}
			}
			if (plugins.mfpGallery.length) {
				for (var i = 0; i < plugins.mfpGallery.length; i++) {
					var mfpGalleryItem = $(plugins.mfpGallery[i]).find('[data-lightbox]');
					for (var c = 0; c < mfpGalleryItem.length; c++) {
						$(mfpGalleryItem).addClass("mfp-" + $(mfpGalleryItem).attr("data-lightbox"));
					}
					mfpGalleryItem.end().magnificPopup({
						delegate: '[data-lightbox]',
						type: "image",
						gallery: {
							enabled: true
						}
					});
				}
			}
		}
		if (plugins.countdown.length) {
			for (var i = 0; i < plugins.countdown.length; i++) {
				var node = plugins.countdown[i],
					countdown = aCountdown({
						node: node,
						from: node.getAttribute('data-from'),
						to: node.getAttribute('data-to'),
						count: node.getAttribute('data-count'),
						tick: 100,
					});
			}
		}
	});
	$(document).ready(function() {
		if (plugins.switcher.length) {
			$.rdstyleswitcher({
				schemes: [{
					'id': 'Scheme 1',
					'icon': '#000000'
				}, {
					'id': 'Scheme 2',
					'url': 'css/style-1.css',
					'icon': '#ffffff'
				}]
			});
		}
	});
	console.log($(window).height());
	console.log($(window).width());
}());