let executives = [
    {
        name: "Oluwatobi Peters",
        position: "President",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Oluwatobi Peters",
        position: "Vice President",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Oluwatobi Peters",
        position: "General Secretary",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Oluwatobi Peters",
        position: "Financial Secretary",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    }
];

function displayExecutives() {
    let carousel_container = document.querySelector("#executive_carousel");
    executives.forEach(element => {
        carousel_container.innerHTML += 
            `<div class='carousel-cell'>
                <div class='c_container'>
                    <div class=''>
                        <img src='${element?.image}' class='executive_img' alt='${element?.name}' />
                    </div>
                    <div class='executive_details'>
                        <h3 class=''>${element?.name}</h3>
                        <h2 class=''>${element?.position}</h2>
                    </div>
                </div>
            </div>` 
    });
}

displayExecutives();