// TOGGLE OPEN AND CLOSE MOBILE MENU 
function toggleMobileMenu() {
    let mobileNav = document.querySelector("#mobileNav");
    let navBar = document.querySelector("#navBar");
    if (mobileNav.style.display == "block") {
        mobileNav.style.display = "none";  
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            navBar.style.background = "#FAFAFA";  
            scrollNavBar();
        } else {
            navBar.style.backdropFilter = "none";  
            navBar.style.background = "unset";  
            navBar.classList.remove("scrollNav") 
        }
    } else {
        mobileNav.style.display = "block";  
        navBar.style.background = '#FAFAFA';  
    }
}

// NAVBAR CHANGE BG ON PAGE SCROLL
function scrollNavBar() {
    const nav = document.querySelector("#navBar")
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.style.background = "#FAFAFA"; 
        nav.classList.add("scrollNav") 
    } else {
        nav.classList.remove("scrollNav") 
        nav.style.background = "none"; 
    }
}

// INSERT NAVBAR TO ALL PAGES
function insertNavBar() {
    let navBar = document.querySelector('#navBar');
    navBar.innerHTML += `
            <nav class="container py-4 flex justify-between items-center font-heading">
            <a href="/" class="flex items-center">
                <img src="/public/img/logo.png" alt="NIMELSSA LOGO" class="h-14" />
                <span class="md:inline hidden font-medium text-2xl text-[#e5e5e5]" id="logo_title">
                    NIMELSSA UI
                </span>
            </a>    
            <!-- NAV MENU -- MD && LG -->
            <ul class="hidden md:flex justify-around items-center space-x-12 text-sm font-body font-medium">
                <li><a class="hover:text-[#090909] transition hover:font-bold ease-linear duration-300" href="/">HOME</a></li>
                <li><a class="hover:text-[#090909] transition hover:font-bold ease-linear duration-300" href="/about.html">ABOUT US</a></li>
                <li><a class="hover:text-[#090909] transition hover:font-bold ease-linear duration-300" href="/executives.html">EXCOS</a></li>
                <li><a class="hover:text-[#090909] transition hover:font-bold ease-linear duration-300" href="/gallery.html">GALLERY</a></li>
                <li><a class="bg-[#A31D26] hover:outline-1 hover:outline hover:outline-[#A31D26] hover:bg-transparent hover:text-[#A31D26] transition ease-linear cursor-pointer px-8 py-2 rounded-full text-[#FAFAFA]" href="/#ifa">IFÁ</a></li>
            </ul>
            <!-- NAV MENU -- MD && LG -->
            <!-- NAV MENU -- SM -->
            <div class="block md:hidden">
                <i onclick="toggleMobileMenu()" class="fa-solid fa-bars"></i>
            </div>
            <!-- NAV MENU -- SM -->
        </nav>
        <!-- NAV MENU -- SM -->
        <ul id="mobileNav" class="hidden w-full justify-around items-center px-6 h-screen space-y-8 text-sm font-body">
            <li><a class="hover:text-gray-300 hover:font-bold ease-linear duration-300" href="/">HOME</a></li>
            <li><a class="hover:text-gray-300 hover:font-bold ease-linear duration-300" href="/staff.html">STAFF</a></li>
            <li><a class="hover:text-gray-300 hover:font-bold ease-linear duration-300" href="/executives.html">EXCOS</a></li>
            <li><a class="hover:text-gray-300 hover:font-bold ease-linear duration-300" href="/gallery.html">GALLERY</a></li>
            <li><a class="hover:text-gray-300 hover:font-bold ease-linear duration-300" href="/opportunities">PRESS</a></li>
        </ul>
        <!-- NAV MENU -- SM -->  
    `;
}

// Insert Footer TO ALL PAGES
function insertFooter() {
    let footer = document.querySelector('#footer');
    footer.innerHTML += `
        <div class="container pt-24 pb-12 grid grid-flow-row md:grid-flow-col auto-cols-fr gap-y-12 md:gap-y-0 md:justify-items-center items-start font-light">
            <div class="flex flex-col font-normal">
                <p class="mb-6 text-base text-[#FBFBFB]">
                    NIMELSSA UI
                </p>
                <p class="text-[#8B8B8B] leading-relaxed text-xs font-light">The Nigerian Medical Laboratory Science Students' Association, University of Ibadan (NIMELSSA UI) established in 2015 is the representative body for all medical laboratory science students in the prestigious College of Medicine, University of Ibadan.</p>
            </div>
            <nav>
                <h3 class="mb-6 uppercase text-sm custom__underline_light text-[#FBFBFB]">Quick Links</h3>
                <ul class="text-xs space-y-3 text-[#8B8B8B] font-light">
                    <li><a href="/about.html">About Us</a></li>
                    <li><a href="/staff.html">Staff</a></li>
                    <li><a href="/executives.html">Executives</a></li>
                    <li><a href="https://biomedicaltimesui.blogspot.com/" target="_blank">Press</a></li>
                    <li><a href="/">IFA</a></li>
                    <li><a href="/gallery.html">Photo Gallery</a></li>
                </ul>
            </nav>
            <div class="">
                <h3 class="mb-6 uppercase text-sm custom__underline_light text-[#FBFBFB]">Contact Us</h3>
                <div class="text-xs space-y-3 text-[#8B8B8B] font-light">
                    <div class="flex items-start justify-start space-x-3">
                        <i class="fa-solid fa-location-dot text-[#FBFBFB]"></i> 
                        <span>
                            1st Floor, Bio-Medical Building,
                            University College Hospital, Ibadan. 
                        </span>
                    </div>
                    <div class="hidden items-start justify-start space-x-3">
                        <i class="fa-solid fa-mobile-screen text-[#FBFBFB]"></i> 
                        <a href="tel:+2348100105264">+2348100105264</a>
                    </div>
                    <div class="flex items-start justify-start space-x-3">
                        <i class="fa-solid fa-envelope text-[#FBFBFB]"></i>
                        <a href="mailto:nimelssaui@gmail.com">nimelssaui@gmail.com</a>
                    </div>                        
                </div>
            </div> 
            <nav>
                <h3 class="mb-6 uppercase text-sm custom__underline_light text-[#FBFBFB]">Other Links</h3>
                <ul class="text-2xl flex space-x-3 text-[#FBFBFB]">
                    <a href="https://www.facebook.com/nimelssa_ui" target="blank"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.instagram.com/nimelssa_ui" target="blank"><i class="fa-brands fa-square-instagram"></i></a>
                    <a href="https://twitter.com/nimelssa_ui" target="blank"><i class="fa-brands fa-square-twitter"></i></a>
                </ul>
            </nav>
        </div>
        <div class="bg-[#181617] py-4">
            <div class="container flex justify-start space-x-4 items-center">
                <p class="text-left text-xs">
                    Copyright © NIMELSSAUI. All rights Reserved
                </p>
                <p class="text-center text-xs">
                    Powered by <a class="text-blue-300" href="mailto:ioluwamichael@gmail.com">@__localdev</a>
                </p>
            </div>
        </div>
    `;
}

window.addEventListener('load', insertFooter());
window.addEventListener('load', insertNavBar());
window.onscroll = function() {scrollNavBar()};
