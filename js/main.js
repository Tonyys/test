//Burger menu
const btnBurger = document.querySelector('.burger')
const burgerTarget = document.querySelector('.mobile')
const body = document.querySelector('body')

btnBurger.addEventListener('click', () => {
	btnBurger.classList.toggle('active')
	burgerTarget.classList.toggle('active')
	body.classList.toggle('active')
})
// lang choose
const lang = document.querySelectorAll('.header__choose')

lang.forEach(function (item) {
	item.addEventListener('click', function () {
		lang.forEach(function (item) {
			item.classList.remove('active')
		})
		item.classList.add('active')
	})
})

//Search
const btnSearch = document.querySelector('.header__search')
const headerFloat = document.querySelector('.header__inner')
const inpSearch = document.querySelector('.header__form')

btnSearch.addEventListener('click',function () {
	headerFloat.classList.toggle('active')
	inpSearch.classList.toggle('active')
})

//Tabs

const tabBtn = document.querySelectorAll('.intro__tab')
const tabContent = document.querySelectorAll('.intro__content')
const lines = document.querySelectorAll('.intro__line')
const intervalTime = 5000;
tabBtn.forEach(function (tab,index) {


	tab.addEventListener('click',function (item) {
		counter = index;

		if(!item.currentTarget.classList.contains('active')){
			clearInterval(interval);
			interval = setInterval(slideChange , intervalTime);
		}


		tabBtn.forEach(function (item) {
			item.classList.remove('active')
		})

		tab.classList.add('active');

		tabContent.forEach(function (item) {
			item.classList.remove('active')
		})

		tabContent[index].classList.add('active');

	})
})

const slideLength = tabContent.length
let counter = 0


function slideChange() {
	counter >= slideLength -1 ? counter = 0 : counter++;
	console.log(counter);
	tabContent.forEach(function (item) {
		item.classList.remove('active')
	})
	tabContent[counter].classList.add('active')
	tabBtn.forEach(function (item) {
		item.classList.remove('active')
	})
	tabBtn[counter].classList.add('active')
}

let interval = setInterval(slideChange , intervalTime);

//swiper Rating
const swiperRating = new Swiper('.rating__swiper', {
	loop: true,
	autoplay: {
		delay: 2000,
	},
	spaceBetween: 25,
	slidesPerView: 3,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2
		},
		1024: {
			slidesPerView: 3,
		},
		1640: {
			slidesPerView: 3,
		}
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.rating__next',
		prevEl: '.rating__prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

// swiper Popular
const swiperPopular = new Swiper('.popular__swiper', {
	loop: true,
	slidesPerView: 4,
	autoplay: {
		delay: 2000,
	},
	spaceBetween: 25,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 4,
		},
		1640: {
			slidesPerView: 4,
		}
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.popular__next',
		prevEl: '.popular__prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
//swiper Focus
const swiperFocus = new Swiper('.focus__swiper', {
	loop: true,
	spaceBetween: 25,
	autoplay: {
		delay: 2000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.focus__next',
		prevEl: '.focus__prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
