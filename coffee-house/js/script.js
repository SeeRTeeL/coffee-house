"use strict"

const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const headerButton = document.querySelector('.header__button');
if (headerBurger) {
	headerBurger.addEventListener("click", function () {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		headerNav.classList.toggle('_active');
		let burgerButton = document.querySelector('.burger__button');

if (!burgerButton) {
			let headerMenu = document.querySelector('.header__menu');
			let newMenuItem = document.createElement('li');
			let newLink = document.createElement('a');
			newLink.href = headerButton.href;

			let newIcon = document.createElement('img');
			newIcon.src = "./img/coffee-cup_b.svg";
			newIcon.alt = "coffee-cup";

			newIcon.style.width = '40px';
			newIcon.style.height = '40px';

			let newTextSpan = document.createElement('span');

			newTextSpan.textContent = 'Menu';
			newLink.appendChild(newTextSpan);
			newLink.appendChild(newIcon);
			newLink.classList.add('burger__button');
			newLink.classList.add('header__button');
			newMenuItem.appendChild(newLink);
			newMenuItem.classList.add('dynamic__element');
			headerMenu.appendChild(newMenuItem);
		}
		if (burgerButton) {
			document.querySelector('.dynamic__element').remove();
		}
	});

}

const headerLinks = document.querySelectorAll('.header__item[data-goto]');
if (headerLinks.length > 0) {
	headerLinks.forEach(headerLink => {
		headerLink.addEventListener("click", onHeaderLinkClick);
	});

	function onHeaderLinkClick(e) {
		const headerLink = e.target;
		if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
			const gotoBlock = document.querySelector(headerLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			if (headerBurger.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				headerBurger.classList.remove('_active');
				headerNav.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}