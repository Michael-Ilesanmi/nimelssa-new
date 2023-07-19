let executives = [
    {
        name: "Dr. I.O. Omotosho",
        position: "Head of Department",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Dr. Folarin",
        position: "Examination Coordinator",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Dr. Bamishaye",
        position: "Lecturer",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Dr. Ajileye",
        position: "Lecturer",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Dr. Kenneth Onyegbula",
        position: "Lecturer",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Mrs. Faulkner",
        position: "Secretary",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    },
    {
        name: "Mr. Odeleye",
        position: "Admin",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1682200320/nimelssa/exco_1_msw2eq.png"
    }
];

function displayStaff() {
    let carousel_container = document.querySelector("#staff_container");
    executives.forEach(element => {
        carousel_container.innerHTML += 
            `
            <div class="border-b-8 border-slate-950 pb-4 w-full" >
                <div class="bg-slate-950">
                    <img src="${element?.image}" alt="" class="h-56 md:h-72 mx-auto backdrop-blur-md" />
                </div>
                <div class="font-body w-full pt-4 px-3 space-y-2 text-right">
                    <h4 class="text-base font-semibold">${element?.name}</h4>
                    <p class="text-sm text-gray-900">${element?.position}</p>
                </div>
            </div>
            ` 
    });
}

window.addEventListener('load', displayStaff())
