let opportunities = [];
fetch('./src/txt/opportunities.json')
.then(response => {
   return response.json();
})
.then(data => opportunities = data.opportunities);


function displayOpportunities() {
    let opportunities_container = document.querySelector("#opportunities_container");
    opportunities.forEach(element => {
        opportunities_container.innerHTML += 
        `<a href="/opportunity.html?title=${element?.slug}" class='border flex flex-col space-y-3 p-4'>
            <h3 class='text-2xl font-heading'>${element?.title}</h3>
            <p class='text-sm font-body leading-5'>${element?.summary}</p>
            <p class='text-blue-800 font-semibold !mt-auto pt-6 cursor-pointer' onclick="routeToPost( '${element?.slug} ')">read more...</p>
        </a>`
    });
}


function routeToPost(slug) {
    window.location.href = `/opportunity.html?title=${slug}`; 
}


function displayPost(){
    const url = window.location.href;
    let postSlug = sliceQuery(url);
    let post = opportunities.find((item) => {
        return item.slug === postSlug;
    });
    if (!post) {
        window.location.href = "/opportunities.html"
    }
    let opportunity_title = document.querySelector("#opportunity_title");
    opportunity_title.innerHTML = post?.title;
    let opportunity_container = document.querySelector("#opportunity_container");
    opportunity_container.innerHTML = 
    `<div class='border flex flex-col space-y-3 p-4'>
        <h3 class='text-2xl font-heading'>${post?.title}</h3>
        <p class='text-sm font-body leading-5'>${post?.summary}</p>
        <p class='text-blue-800 font-semibold !mt-auto pt-6 cursor-pointer' onclick="routeToPost( '${post?.slug} ')">read more...</p>
    </div>`
}

function sliceQuery(url){
    const paramArr = url.slice(url.indexOf('?') + 1).split('&');
    const params = {};
    paramArr.map(param => {
        const [key, val] = param.split('=');
        params[key] = decodeURIComponent(val);
    });
    return params.title
}

function showLatestOpportunities() {
    let opportunities_container = document.querySelector("#homepage_opportunities");

    opportunities.forEach((element, index) => {
        if (index < 3) {
            console.log(index)
            opportunities_container.innerHTML += 
            `<a href="/opportunity.html?title=${element?.slug}" class="border flex flex-col space-y-3 p-4">
                <h3 class="text-2xl font-heading truncate whitespace-nowrap">${truncateText(element?.title, 25)}</h3>
                <p class="text-sm font-body leading-5">${truncateText(element?.summary, 100)}</p>
                <p class="text-blue-800 font-semibold !mt-auto pt-6 cursor-pointer" onclick="routeToPost( '${element?.slug} ')">read more...</p>
            </a>`
        }
    });        
}

function truncateText(text, count) {
    // If the length of text is less than or equal to num
    // just return text--don't truncate it.
    if (text.length <= count) {
        return text
    }
    // Return text truncated with '...' concatenated to the end of text.
    return text.slice(0, count) + '...'
}