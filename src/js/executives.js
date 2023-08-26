let executives = [
    {
        name: "Oluwatobiloba Elizabeth Peters",
        position: "President",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1693054741/nimelssa/excos/PCV_3866_3_zn0gvv-removebg-preview_i13iex.png"
    },
    {
        name: "Oluwaseun Adekitan",
        position: "Vice President",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1693054742/nimelssa/excos/Black_dress_headshot_lp0k69-removebg-preview_v8qvpn.png"
    },
    {
        name: "Marvellous Rotimi Olatoye",
        position: "General Secretary",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1693054742/nimelssa/excos/1690555327417-transformed_sclt2r-removebg-preview_kfahnw.png"
    },
    {
        name: "Augustine Ekene Nwagwu",
        position: "Sports Director",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1693054741/nimelssa/excos/IMG_7742_akt6hq-removebg-preview_f9oien.png"
    }
];

function displayExecutives() {
    let carousel_container = document.querySelector("#executives_container");
    executives.forEach(element => {
        carousel_container.innerHTML += 
            `
            <div class="border-b-8 border-slate-950 pb-4 w-full" >
                <div class="bg-slate-950 mb-4">
                    <img src="${element?.image}" alt="${element?.name}" class="h-56 md:h-64 mx-auto backdrop-blur-md" />
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
