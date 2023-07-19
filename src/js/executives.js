let executives = [
    {
        name: "Oluwatobi Peters",
        position: "President",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Alexa Jane",
        position: "Vice President",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Grant Edwards",
        position: "General Secretary",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Ajayi Oluwasanmi",
        position: "Financial Secretary",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Chuck Raymond",
        position: "Treasurer",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Francisca Lemonade",
        position: "Special Duty Officer",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    }
];

function displayExecutives() {
    let carousel_container = document.querySelector("#executives_container");
    executives.forEach(element => {
        carousel_container.innerHTML += 
            `
            <div class="border-b-8 border-slate-950 pb-4 w-full" >
                <div class="bg-slate-950">
                    <img src="${element?.image}" alt="" class="h-60 md:h-72 mx-auto backdrop-blur-md" />
                </div>
                <div class="font-body w-full pt-4 px-3 space-y-2 text-right">
                    <h4 class="text-base font-semibold">${element?.name}</h4>
                    <p class="text-sm text-gray-900">${element?.position}</p>
                </div>
            </div>
            ` 
    });
}

window.addEventListener('load', displayExecutives())
