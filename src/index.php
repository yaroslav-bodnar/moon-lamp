<!DOCTYPE html>
<html>
<head>
	<title>MoonLamp</title>

	<meta charset="utf-8">
	<meta content="width=device-width, height=device-height, initial-scale=1.0" name="viewport">
	<!-- <link href="./css/bootstrap.css" rel="stylesheet"> -->
	<!-- <link href="./css/standart.style.min.css" id="main-standart-styles" rel="stylesheet"> -->
	<!-- <link href="./css/main.css" id="main-additional-styles" rel="stylesheet"> -->
	<!-- <link rel="stylesheet" href="./slick/slick.css"> -->
	<!-- <link rel="stylesheet" href="./slick/slick-theme.css"> -->

	<?php wp_head(); ?>

</head>
<body>

	<div class="preloader">
		<div class="preloader-body">
			<div class="cssload-container">
				<span></span><span></span><span></span><span></span>
			</div>
		</div>
	</div>
	<div class="page">



		<header class="section page-header-custom">

			<!--Секция меню сайта-->
			<div class="rd-navbar-wrap">
				<nav class="rd-navbar rd-navbar-classic" data-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-stick-up="true" data-lg-stick-up-offset="46px" data-md-device-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-xl-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xl-stick-up="true" data-xl-stick-up-offset="46px" data-xxl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-stick-up="true" data-xxl-stick-up-offset="46px">
					<div class="rd-navbar-main">
						<div class="rd-navbar-panel">

							<div class="rd-navbar-brand main-logo-text">
								MoonLamp
							</div>

							<div class="rd-navbar-project-hamburger" data-multitoggle=".rd-navbar-nav-wrap" data-multitoggle-isolate="">
								<div class="project-hamburger">
									<span class="project-hamburger-arrow-top"></span>
									<span class="project-hamburger-arrow-center"></span>
								</div>
								<div class="project-hamburger-text">
									Меню
								</div>
							</div>
							
							<div class="rd-navbar-list-social main-menu-social"></div>
							<div class="rd-navbar-aside"></div>
							
							<div class="rd-navbar-nav-wrap">
								<div class="rd-navbar-sidebar-toggle" data-multitoggle=".rd-navbar-nav-wrap" data-multitoggle-isolate="">
									<span class="fl-soft-icons-cross68 main-close-icon">&#10006;</span>
								</div>
								<ul class="rd-navbar-nav">
									<li class="rd-nav-item">
										<a class="rd-nav-link" href="#about-us">О MoonLamp</a>
									</li>
									<li class="rd-nav-item">
										<a class="rd-nav-link" href="#gallery">Галерея</a>
									</li>
									<li class="rd-nav-item">
										<a class="rd-nav-link" href="#video-overview">Видео-обзор</a>
									</li>
									<li class="rd-nav-item">
										<a class="rd-nav-link" href="#reviews">Отзывы</a>
									</li>
									<li class="rd-nav-item">
										<a class="rd-nav-link" href="#contacts">Контакты</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>



			<!-- Секция основной информации в шапке сайта -->
			<div class="container custom-container">
				<div class="row">
					<div class="col-xl-6 offset-xl-1 offset-xxl-1 swiper-container-wrap">

						<div class="swiper-container swiper-slider swiper-slider-modern main-header-block-slider " data-autoplay="5000" data-loop="true" data-nav="true" data-slide-effect="fade" data-thumb="#swiper-thumbs">
							<div class="swiper-wrapper main-swiper-bg">
								<div class="swiper-slide bg-image-lg bg-overlay-2 main-swiper-bg" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__1.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__2.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__3.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__4.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__5.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__6.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__7.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__8.jpg"></div>
							</div>
							<div class="swiper-pagination__module">
								<div class="swiper-pagination"></div>
								<div class="swiper-counter"></div>
							</div>
						</div>

						<div class="swiper-container swiper-slider swiper-thumbs" data-center="true" data-loop="true" data-nav="true" data-secondary="" data-slides-per-view="4" data-space-between="30" id="swiper-thumbs">
							<div class="swiper-wrapper">
								<div class="swiper-slide bg-image-lg bg-overlay-2 main_slider_image" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__1.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2 main_slider_image" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__2.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2 main_slider_image" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__3.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2 main_slider_image" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__4.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2 main_slider_image" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__5.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2 main_slider_image" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__6.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2 main_slider_image" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__7.jpg"></div>
								<div class="swiper-slide bg-image-lg bg-overlay-2 main_slider_image" data-slide-bg="<?php echo get_template_directory_uri(); ?>/images/header_gallery/header__8.jpg"></div>
							</div>
						</div>
					</div>
					<div class="col-xl-7 col-xxl-6 offset-xl-6 offset-xxl-6">
						<div class="swiper-modern-content main-header-text">
							<h1 class="main_header_title" >Сенсорный<br>
								LED светильник-ночник<br>
								3D Лампа Луна</h1>
							<p class="font-weight-regular main_header_dsc">&#10004;&nbsp;&nbsp;Три естественных оттенка свечения<br>
															&#10004;&nbsp;&nbsp;Работает до 3 ночей без подзарядки<br>
															&#10004;&nbsp;&nbsp;Сенсорное управление яркостью и цветом<br>
															&#10004;&nbsp;&nbsp;Ударопрочный нетоксичный пластик<br>
															&#10004;&nbsp;&nbsp;Международный стандарт качества ISO 9001</p>
															<div class="main_header-user-interaction">
																<div class="main-price">
																	<p class="main-old-price">720 грн</p>
																	<p class="main-new-price">504 <span>грн</span></p>
																</div>
																<a class="button button-default wow fadeInUp main_home_button" data-wow-delay=".1s" href="#contacts">Купить</a>
															</div>

						</div>
					</div>
				</div>
			</div>
		</header>
















		<!--Секция блока приимущества-->
		<section class="section section-md first-section-custom" id="about-us">
			<div class="container">
				<div class="row justify-content-center">

						<div class="col-12 col-sm-12 row row-60" id="main-about-block-768">
							<div id="main-about-block-768-1" class="col-md-6 wow fadeInLeft" data-wow-delay="0s">
								<img src="<?php echo get_template_directory_uri(); ?>/images/about/igrushka_dlya_kids.jpg" alt="igrushka_dlya_kids">
							</div>
							<div id="main-about-block-768-2" class="col-md-6 col-lg-5 wow fadeInRight custom-offset-top-md-114 custom-onset-left-1" data-wow-delay=".1s">
								<h2 class="main-about-dsc"><span class="title-decorative-letter main-decorative-letter">Б</span>Безопасный ночник - игрушка для ребенка</h2>
							</div>
						</div>


						<div class="col-12 col-sm-12 row row-60" id="main-about-block-768">
							<div id="main-about-block-768-2" class="col-md-6 col-lg-5 wow fadeInLeft custom-offset-top-md-114 custom-onset-left-1" data-wow-delay=".1s">
								<h2 class="main-about-dsc"><span class="title-decorative-letter main-decorative-letter">Н</span>Необычный подарок для вашей второй половинки</h2>
							</div>
							<div id="main-about-block-768-1" class="col-md-6 wow fadeInRight" data-wow-delay="0s">
								<img src="<?php echo get_template_directory_uri(); ?>/images/about/love_podarok.jpg" alt="love_podarok">
							</div>
						</div>


						<div class="col-12 col-sm-12 row row-60" id="main-about-block-768">
							<div id="main-about-block-768-1" class="col-md-6 wow fadeInLeft" data-wow-delay="0s">
								<img src="<?php echo get_template_directory_uri(); ?>/images/about/element_interyera.jpg" alt="element_interyera">
							</div>
							<div id="main-about-block-768-2" class="col-md-6 col-lg-5 wow fadeInRight custom-offset-top-md-114 custom-onset-left-1" data-wow-delay=".1s">
								<h2 class="main-about-dsc"><span class="title-decorative-letter main-decorative-letter">С</span>Стильный и полезный элемент интерьера</h2>
							</div>
						</div>
				</div>
			</div>
		</section>






















		<!--Секция галереи-->
		<section class="section" id="gallery">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xxl-10">
						<div class="title-decorative-2 wow slideInUp main-gallery-home-title" data-wow-delay="0s">
							Галерея
						</div>
						<div class="row row-60" data-lightgallery="group">



							<div class="col-md-6">
								<div class="row row-60">
									<div class="col-12">
										<article class="thumbnail-classic wow slideInLeft" data-wow-delay="0s">
											<div class="thumbnail-classic-figure"><img alt="" src="<?php echo get_template_directory_uri(); ?>/images/gallery_1.jpg"></div>
											<div class="thumbnail-classic-caption">
												<div>
													<div class="thumbnail-classic-button-wrap">
														<div class="thumbnail-classic-button">
															<p class="icon main-gallery-title" >
																Работает до 3 ночей без подзарядки.
															</p>
														</div>
													</div>
												</div>
											</div>
										</article>
									</div>

									<div class="col-12">
										<article class="thumbnail-classic wow slideInLeft" data-wow-delay="0s">
											<div class="thumbnail-classic-figure"><img alt="" src="<?php echo get_template_directory_uri(); ?>/images/gallery_2.jpg"></div>
											<div class="thumbnail-classic-caption">
												<div>
													<div class="thumbnail-classic-button-wrap">
														<div class="thumbnail-classic-button">
															<p class="icon main-gallery-title" >
																Сенсорное управление <br>яркостью и цветом.
															</p>
														</div>
													</div>
												</div>
											</div>
										</article>
									</div>
								</div>
							</div>



							<div class="col-md-6 gallery-custom-top">
								<div class="row row-60">
									<div class="col-12">
										<article class="thumbnail-classic wow slideInRight" data-wow-delay="0s">
											<div class="thumbnail-classic-figure"><img alt="" src="<?php echo get_template_directory_uri(); ?>/images/gallery_3.jpg"></div>
											<div class="thumbnail-classic-caption">
												<div>
													<div class="thumbnail-classic-button-wrap">
														<div class="thumbnail-classic-button">
															<p class="icon main-gallery-title" >
																Три естественных оттенка свечения!
															</p>
														</div>
													</div>
												</div>
											</div>
										</article>
									</div>

									<div class="col-12 wow slideInRight text-center text-md-left" data-wow-delay="0s">
										<article class="thumbnail-classic">
											<div class="thumbnail-classic-figure"><img alt="" src="<?php echo get_template_directory_uri(); ?>/images/gallery_4.jpg"></div>
											<div class="thumbnail-classic-caption">
												<div>
													<div class="thumbnail-classic-button-wrap">
														<div class="thumbnail-classic-button">
															<p class="icon main-gallery-title" >
																Ударопрочный нетоксичный пластик.
															</p>
														</div>
													</div>
												</div>
											</div>
										</article>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>






		<section class="comparison">
			<div class="comparison_title title-decorative-2">
				<P>Сравнение ламп</P>
			</div>
			<div class="containner">
				<div class="row justify-content-center align-items-center">
					
						<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-6">
							<div class="main_comparison_image">
								<img src="<?php echo get_template_directory_uri(); ?>/images/comparison.jpg" alt="comparison_image">
							</div>
						</div>
						
						<div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-6">
							<div class="main_comparison_table">
								<table>
									<thead>
										<tr>
											<th class="table_title" style="border-bottom: 3px solid black; border-right: 3px solid black">Оригинальная лампа</th>
											<th class="table_title" style="border-bottom: 3px solid black">Дешевая лампа</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td style="border-bottom: 3px solid black; border-right: 3px solid black">Работает от USB и внутреннего аккумулятора.</td>
											<td style="border-bottom: 3px solid black">Работает только от USB.</td>
										</tr>
										<tr>
											<td style="border-bottom: 3px solid black; border-right: 3px solid black">Сенсорное управление яркостью и цветом. Три естественных оттенка свечения.</td>
											<td style="border-bottom:3px solid black">Нет управления яркостью, цвета рандомно переключаются ударом по лампе.</td>
										</tr>
										<tr>
											<td style="border-right: 3px solid black">Безопасный для детей, мягкий, ударопрочный, нетоксичный пластик.</td>
											<td>Дешевый, хрупкий пластик, сомнительного качества.</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

				</div>
			</div>
		</section>







		<!-- Секция видео обзора -->
		<section class="" id="video-overview">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xxl-12 justify-content-end">
						<div class="title-decorative-2 wow slideInUp main-video-home-title" data-wow-delay="0s">
							Видео
						</div>
						<div class="row row-60 about_second_block main-all_block-video">
							<div class="col-12 col-md-6 col-lg-5 wow fadeInLeft custom-offset-top-md-114 custom-onset-left-1" data-wow-delay=".1s">
								<h2 class="main-video-title"><span class="title-decorative-letter main-decorative-letter main-video-title-letter">П</span>Посмотрите видео-обзор распаковки:</h2>
							</div>
							<div class="col-md-6 wow fadeInRight main-video-block">
								<iframe class="main-video-iframe" width="560" height="315" src="https://www.youtube.com/embed/9wE1YBya3Og" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>













		<!--Секция акционного предложения-->
		<section class="section section-xxl main-section-discaunt">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xxl-10">
						<div class="row justify-content-center text-left">
							<div class="col-sm-10 col-lg-6 wow fadeInLeft" data-wow-delay="0s">
								<h2 class="title-decorative"><span class="font-weight-light">Специальное</span><br>
								<span class="font-weight-black">Предложение</span></h2>
								<p class="wow fadeInLeft" data-wow-delay=".1s">Наше акционное предложение действует<br>
								до конца месяца:</p>



								<div class="countdown-custom">
									<div class="countdown" data-countdown="data-countdown" data-to="2019-10-31">
										<div class="countdown-block countdown-block-days">
											<svg class="countdown-circle" data-progress-days="" height="200" viewbox="0 0 200 200" width="200" x="0" y="0">
											<circle class="countdown-circle-bg" cx="100" cy="100" r="90"></circle>
											<circle class="countdown-circle-fg clipped" cx="100" cy="100" r="90"></circle></svg>
											<div class="countdown-wrap">
												<div class="countdown-counter" data-counter-days="">
													00
												</div>
												<div class="countdown-title">
													дней
												</div>
											</div>
										</div>
										<div class="countdown-block countdown-block-hours">
											<svg class="countdown-circle" data-progress-hours="" height="200" viewbox="0 0 200 200" width="200" x="0" y="0">
											<circle class="countdown-circle-bg" cx="100" cy="100" r="90"></circle>
											<circle class="countdown-circle-fg clipped" cx="100" cy="100" r="90"></circle></svg>
											<div class="countdown-wrap">
												<div class="countdown-counter" data-counter-hours="">
													00
												</div>
												<div class="countdown-title">
													часов
												</div>
											</div>
										</div>
										<div class="countdown-block countdown-block-minutes">
											<svg class="countdown-circle" data-progress-minutes="" height="200" viewbox="0 0 200 200" width="200" x="0" y="0">
											<circle class="countdown-circle-bg" cx="100" cy="100" r="90"></circle>
											<circle class="countdown-circle-fg clipped" cx="100" cy="100" r="90"></circle></svg>
											<div class="countdown-wrap">
												<div class="countdown-counter" data-counter-minutes="">
													00
												</div>
												<div class="countdown-title">
													минут
												</div>
											</div>
										</div>
										<div class="countdown-block countdown-block-seconds">
											<svg class="countdown-circle" data-progress-seconds="" height="200" viewbox="0 0 200 200" width="200" x="0" y="0">
											<circle class="countdown-circle-bg" cx="100" cy="100" r="90"></circle>
											<circle class="countdown-circle-fg clipped" cx="100" cy="100" r="90"></circle></svg>
											<div class="countdown-wrap">
												<div class="countdown-counter" data-counter-seconds="">
													00
												</div>
												<div class="countdown-title">
													секунд
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="main_discaunt-user-interaction">
									<div class="main_discaunt-price">
										<p class="main_discaunt-old-price">720 грн</p>
										<p class="main_discaunt-new-price">504 <span>грн</span></p>
									</div>
									<a class="button button-default wow fadeInUp main_discaunt-button" data-wow-delay=".1s" href="#contacts">Купить</a>
								</div>

							</div>




							<div class="col-12 col-lg-6 custom-offset-top-100 wow fadeInRight" data-wow-delay=".1s">
								<div class="services-bg">
									<div class="discount">
										<div class="discount-text">
											30%<br>
											<span>скидка</span>
										</div>
									</div>
									<img alt="discaunt_img" class="img-width-xxl main-discaunt-img" src="<?php echo get_template_directory_uri(); ?>/images/discaunt_img.jpg">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>






















		<!-- Секция отзывы покупателей -->
		<section class="section section-xs" id="reviews">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xxl-10">
						<div class="row">
							<div class="col-12 wow fadeInDown" data-wow-delay="0s">
								<h2 class="title-decorative"><span class="title-decorative-letter main-reviews-decorative-letter">O</span><span class="title-decorative-word"><span class="font-weight-light">Отзывы</span><br>
								<span class="font-weight-black main-reviews-dsc">Покупателей</span></span></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container custom-container">
				<div class="row row-50 justify-content-center">
					

					<div class="col-10 main-slick-slider">
						<div class="wow fadeInDown one_slider" data-wow-delay=".2s">
							<article class="post-creative">
								<div class="post-creative-bg bg-1 bg-image bg-overlay"></div>
								<div class="post-creative-text">
									<div class="post-creative-counter">
										<img src="<?php echo get_template_directory_uri(); ?>/images/user_1.jpg" alt="user_1">
									</div>
									<h5 class="post-creative-title">Олексей Павленко</h5>
									<p>Прекрасная и красивая лампа (когда светится особенно) меняет цвета по касанию и автоматически, отлично вписывается в любой интерьер и радует глаз)))) на подарок - вообще чудесно и оригинально)</p>
								</div>
							</article>
						</div>
						
						<div class="wow fadeInUp one_slider" data-wow-delay=".1s">
							<article class="post-creative">
								<div class="post-creative-bg bg-2 bg-image bg-overlay"></div>
								<div class="post-creative-text">
									<div class="post-creative-counter">
										<img src="<?php echo get_template_directory_uri(); ?>/images/user_2.jpg" alt="user_2">
									</div>
									<h5 class="post-creative-title">Ксения Бурканова</h5>
									<p>Не обычная очень крутая лампа! Три режима свечения. Тёплый, холодный и тусклый для постоянной работы. Ни один цвет не раздражает!</p>
								</div>
							</article>
						</div>
						
						<div class="wow fadeInDown one_slider" data-wow-delay=".2s">
							<article class="post-creative">
								<div class="post-creative-bg bg-3 bg-image bg-overlay"></div>
								<div class="post-creative-text">
									<div class="post-creative-counter">
										<img src="<?php echo get_template_directory_uri(); ?>/images/user_3.jpg" alt="user_3">
									</div>
									<h5 class="post-creative-title">Оля Купиенко</h5>
									<p>Очень необычный качественный ночник , беспроводной , реагирует на прикосновение пальца , три оттенка света , в спальне появилась настоящая луна !Пока всем довольна , хочу еще одну заказать!</p>
								</div>
							</article>
						</div>
						
						<div class="wow fadeInUp one_slider" data-wow-delay=".2s">
							<article class="post-creative">
								<div class="post-creative-bg bg-2 bg-image bg-overlay"></div>
								<div class="post-creative-text">
									<div class="post-creative-counter">
										<img src="<?php echo get_template_directory_uri(); ?>/images/user_4.jpg" alt="user_3">
									</div>
									<h5 class="post-creative-title">Женя Гриценко</h5>
									<p>Какой-то гениальный человек до этого первый додумался!… Идея - потрясающая… Крутой подарок для малыша или любимой женщины. Лично моей доченке очень понравилось, она просто в восторге, теперь когда ложится спать постояно включает светильник, а я ей под это все дело читаю сказкы.</p>
								</div>
							</article>
						</div>
					</div>


				</div>
			</div>
		</section>














		<!-- Секция контакты-->
		<section class="section section-last text-md-left" data-type="anchor" id="contacts">
			<div class="container custom-container">
				<div class="row">
					<div class="col-md-7 col-xxl-6 contact-form-wrap">
						<h2 class="font-weight-bold text-spacing--1">Заполните форму</h2>
						<p class="main-form-dsc">и мы вам перезвоним</p>
						<form action="bat/rd-mailform.php" class="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post">
							<div class="row row-30 row-md-80">
								<div class="col-xl-6">
									<h3 class="font-weight-bold text-spacing---2">Имя</h3>
									<div class="form-wrap">
										<input class="form-input" data-constraints="@Required" id="contact-first-name" name="name" type="text"> <label class="form-label" for="contact-first-name">введите ваше имя</label>
									</div>
								</div>
								<div class="col-xl-6">
									<h3 class="font-weight-bold text-spacing---2">Номер телефона</h3>
									<div class="form-wrap">
										<input class="form-input" data-constraints="@Required" id="contact-phone" name="phone" type="tel"> <label class="form-label" for="contact-phone">введите ваш телефон</label>
									</div>
								</div>
							</div>
							<button class="button button-default" type="submit">Заказать</button>
						</form>
					</div>
				</div>
			</div>
		</section>








		<!-- Секция footer-->
		<footer class="section footer-modern">
			<div class="footer-modern-content">

				<div class="footer---title">
					<div class="col-3 title-decorative-2 wow slideInUp main-footer-modern-title" data-wow-delay="0s">
						Контакты
					</div>
				</div>
				<div class="container custom-container contanct-custom-container">
					<div class="row row-50 justify-content-start contacnt-custom-container-2 col-12" style="margin: 0px 0px 0px -20px; padding: 0px;">
						<div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 text-center text-md-left" style="padding: 0px;">
							<ul class="footer-contacts">
								<li class="firs-li">
									<a class="link-color-2 footer-phone" href="#">+38 (063) 011 66 69</a><br>
									<div class="footer_img_man">
										<p>Андрей</p>
										<img src="<?php echo get_template_directory_uri(); ?>/images/man.jpg" alt="man">
									</div>
									<div class="footer_img_woman">
										<p>Ирина</p>
										<img src="<?php echo get_template_directory_uri(); ?>/images/woman.jpg" alt="woman">
									</div>
								</li>
								<li class="text-white second-li">
									<a target="_blank" href="https://goo.gl/maps/Y7udZ6qZuEZQsugeA">г. Киев, улица Стрыйская 4,<br>
														oфис 4</a>
								</li>
								<li class="third-li">
									<p>График работы:</p><br>
									<span>Пн.- ПТ. - 10:00 - 18:00</span><br>
									<span>Сб. - 11:00 - 17.00</span><br>
									<span>Вс. - выходной</span>
								</li>
							</ul>
						</div>
						<iframe class="main-google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.162287538461!2d30.399431315731597!3d50.456702579476215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc5db0db46c3%3A0x8fc77cfc7fdedfd4!2z0YPQuy4g0KHRgtGA0YvQudGB0LrQsNGPLCA0LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1569399566903!5m2!1sru!2sua" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
					</div>

				</div>
			</div>

			<div class="main-footer-social">
				<a target="_blank" href="https://www.facebook.com/avvstech/">
					<img class="facebook" src="<?php echo get_template_directory_uri(); ?>/images/facebook.png" alt="facebook">
					<p class="facebook-text" >Facebook</p>
				</a>
			</div>

			<div class="main-footer-iso">
				<div>
					<img class="main-footer-iso__certificat" src="<?php echo get_template_directory_uri(); ?>/images/certificat.jpg" alt="certificat">
					<img src="<?php echo get_template_directory_uri(); ?>/images/main-ISO.png" alt="iso">
				</div>
			</div>


			<div class="pop-up_window_certificat">
				<div class="dimming-popup-form">
					<img class="main-footer-iso__certificat-pop_up" src="<?php echo get_template_directory_uri(); ?>/images/certificat.jpg" alt="certificat">
				</div>
			</div>



			<div class="footer-modern-bottom-panel text-md-left">
				<div class="container custom-container">
					<p class="rights"><span>Y. Bodnar&copy;&nbsp;</span><span class="copyright-year"></span><span>&nbsp;</span><span>ID</span><span>.&nbsp;</span><span>Все права защищены</span><span>.&nbsp;</span><span></span></p>
				</div>
			</div>
		</footer>


	</div>
	<div class="snackbars" id="form-output-global"></div>
	<a href="#" id="ui-to-top" class="ui-to-top active">Перейти вверх</a>












<!-- 	<script src="./js/jquery-3.4.1.min.js"></script>

	<script src="./js/wow.min.js"></script>
	<script src="./js/wow.script.js"></script>


	<script src="./js/core.min.js"></script> 
	<script src="./js/script.js"></script>  -->

	<!-- <script src="./slick/slick.js"></script> -->
	<!-- <script src="./js/slick.script.js"></script> -->

	<?php wp_footer(); ?>

</body>
</html>