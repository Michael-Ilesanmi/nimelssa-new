secs = 4;
const imgs = [
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1686013775/nimelssa/nguy-n-hi-p-2rNHliX6XHk-unsplash_m6s1gp.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1686013775/nimelssa/national-cancer-institute-s9WLlvDlbx4-unsplash_npy7pg.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1686013775/nimelssa/national-cancer-institute-lTlB51-XGP4-unsplash_j1ex8h.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1686013775/nimelssa/national-cancer-institute-klUaFqLAcFw-unsplash_ysz8hh.jpg'
];
imgs.forEach(function(img){
    new Image().src = img; 
    // caches images, avoiding white flash between background replacements
});
let hero = document.querySelector("#hero_section");

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < imgs.length; i++) {
		setTimeout(function(){ 
			hero.style.backgroundImage = `radial-gradient( circle 975px at 2.6% 48.3%,  rgba(0,8,120,0.6) 0%, rgba(95,184,224,0.6) 99.7% ), url(${imgs[k]})`;
		if ((k + 1) === imgs.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
// backgroundSequence();


function toggleMobileMenu() {
    let nav = document.querySelector("#mobileNav");
    nav.style.display = nav.style.display == "none" ? "block" : "none";    
}

window.onscroll = function() {scrollNavBar()};

function scrollNavBar() {
    const nav = document.querySelector("#navBar")
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add("scrollNav") 
    } else {
        nav.classList.remove("scrollNav") 
    }
}