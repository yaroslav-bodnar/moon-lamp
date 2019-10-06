$('.main-slick-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1199,
				settings: {
					infinite: true,
					slidesToScroll: 1,
					slidesToShow: 2
				}
		},
		{
			breakpoint: 767,
				settings: {
					centerPadding: '20px',
					centerMode: true,
					infinite: true,
					slidesToScroll: 1,
					slidesToShow: 1
				}
		},
		{
			breakpoint: 510,
				settings: {
					centerPadding: '10px',
					centerMode: true,
					infinite: true,
					slidesToScroll: 1,
					slidesToShow: 1
				}
		}
	]
});