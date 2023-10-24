// menu toggle bar
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function () {
	mobileMenu.classList.toggle('active');
});
