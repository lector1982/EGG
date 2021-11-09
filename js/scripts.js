const swiper = new Swiper('.swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
});


let tabs = document.querySelectorAll('.tabs__item');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		tabs.forEach(tab => {
			tab.classList.remove('active');
		});
		tab.classList.add('active');
	});
});


window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs() {
	let tabsContainer = document.querySelector('.tabs__container');
	let tabsInner = document.querySelector('.tabs');
	if (tabsInner.offsetWidth > tabsContainer.offsetWidth) {
		tabsInner.classList.add('overflow');
	} else {
		tabsInner.classList.remove('overflow');
	}
}


//HTML(Pug)
//CSS
//SASS/LESS(препроцессоры)
//Bootstrap, Materialize, Tailwind, Foundation
//GIT
//Javascript, Jquery
//Gulp
//Webpack
//React, Angular, Vue