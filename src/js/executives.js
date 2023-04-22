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

let carousel_container = document.querySelector("#executive_carousel");

executives.forEach(element => {
    carousel_container.innerHTML += `<div class='carousel-cell'><div class='container flex justify-around'><div class='flex justify-center'><img src='${element?.image}' class='h-[200px]' alt='${element?.name}' /></div><div class='self-center text-right text-gray-100'><h3 class='font-heading text-2xl'>${element?.name}</h3><h2 class='font-heading text-lg font-medium text-gray-100'>${element?.position}</h2></div></div></div>` 
});
