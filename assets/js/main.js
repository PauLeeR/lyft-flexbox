function changeColor() {
	var distance = window.pageYOffset || document.documentElement.scrollTop;
	var newNav = document.getElementById("navbar");
	var logo = document.getElementById("logo");

	if (distance>100) {
		newNav.classList.add("newNav");
		logo.setAttribute("src", "assets/img/img-lyft/logo-pink.png");
	} else {
		newNav.classList.remove("newNav");
		logo.setAttribute("src", "assets/img/img-lyft/logo-white.png");
	}
};

window.addEventListener("scroll", changeColor);
