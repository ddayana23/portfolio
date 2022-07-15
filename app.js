
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

/* typed effect*/

let typed = new Typed('.type', {

    strings: [
        " Junior Frontend Web Developer.", 
        " Blogger ", 
        " puzzle enthusiast!"],

    typeSpeed: 80,
    backDelay: 1200,
    backSpeed: 80,
    loop: true,
});

/* burger */

const  menuInit = () => {
	if (document.querySelector('.nav__toggle')) {
		document.addEventListener("click", function (e) {
			if (e.target.closest('.nav__toggle')) {
				// bodyLockToggle();
				document.documentElement.classList.toggle("menu-open");
			}
		});
	};
}

const menuOpen = () => {
	bodyLock();
	document.documentElement.classList.add("menu-open");
}
const menuClose = () => {
	bodyUnlock();
	document.documentElement.classList.remove("menu-open");
}

menuInit();



