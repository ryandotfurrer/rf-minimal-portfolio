function mobileMenu() {
	const hamburger = document.querySelector('#hamburger');
	const navList = document.querySelector('.navlist');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		navList.classList.toggle('active');
	});
}

function closeMenu() {
	const hamburger = document.querySelector('#hamburger');
	const navList = document.querySelector('.navlist');
	const navLink = document.querySelectorAll('.navlink');

	navLink.forEach((n) =>
		n.addEventListener('click', () => {
			hamburger.classList.remove('active');
			navList.classList.remove('active');
		})
	);
}

closeMenu();
mobileMenu();
