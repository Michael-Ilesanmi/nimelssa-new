let galleryImgs = [
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1688765359/nimelssa/jaron-nix-7wWRXewYCH4-unsplash_d1kt5s.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1688765988/nimelssa/266085052_491452042278864_7696631838286143858_n_caq7yp.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1686013775/nimelssa/nguy-n-hi-p-2rNHliX6XHk-unsplash_m6s1gp.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1613841934/samples/landscapes/nature-mountains.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1613841932/samples/imagecon-group.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1613841930/samples/people/bicycle.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1613841929/samples/people/jazz.jpg',
    'https://res.cloudinary.com/ioluwamichael/image/upload/v1613841925/samples/food/pot-mussels.jpg'
];

let container = document.querySelector('#imageGallery')

function showGallery() {
    galleryImgs.forEach(element => {
        container.innerHTML += `
            <div class="border-b-8 border-slate-950 pb-4 w-full" >
                <div class="bg-slate-950 h-72">
                    <img src="${element}" alt="" class="h-full mx-auto backdrop-blur-md w-full" loading="lazy" style="object-fit:contain" />
                </div>
            </div>
        `
    })
}

window.addEventListener('load', showGallery())