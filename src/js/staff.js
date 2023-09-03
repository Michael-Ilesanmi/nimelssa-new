let executives = [
    {
        name: "Dr. I.O. Omotosho",
        position: "Head of Department",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1693056543/nimelssa/staff/tosho-removebg-preview_buuc0j.png"
    },
    {
        name: "Dr. O.R. Folarin",
        position: "Examination Co-ordinator",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1693056390/nimelssa/staff/exam-coord_co4urw-removebg-preview_hksfub.png"
    },
    {
        name: "Dr. E.O Bamishaye",
        position: "Staff Advisor",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1693056390/nimelssa/staff/advisor_lo9nvh-removebg-preview_a1fefu.png"
    },
    {
        name: "Dr. Ajileye",
        position: "Lecturer",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1693056390/nimelssa/staff/staff-2_qc943g-removebg-preview_ips3lq.png"
    },
    {
        name: "Dr. Kenneth Onyegbula",
        position: "Lecturer",
        image: "https://res.cloudinary.com/ioluwamichael/image/upload/v1693056389/nimelssa/staff/staff-3_p2wdtk-removebg-preview_iq47qd.png"
    }
];

function displayStaff() {
    let carousel_container = document.querySelector("#staff_container");
    executives.forEach(element => {
        let oldURL =  element?.image;
        let matchString  = "image/upload/";
        let i = oldURL.indexOf(matchString);
        let newURL = oldURL.substr(0, i+matchString.length) + "w_0.5,c_scale/" + oldURL.substr(i+matchString.length);
        carousel_container.innerHTML += 
            `
            <div class="border-b-8 border-slate-950 pb-4 w-full" >
                <div class="bg-slate-950">
                    <img src="${newURL ?? oldURL}" alt="${element?.name}" class="h-56 md:h-72 mx-auto backdrop-blur-md" />
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
