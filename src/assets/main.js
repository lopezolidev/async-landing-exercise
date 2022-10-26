//First we need to copy the fetch code to have the basis of our API consumption. In this case will be a youtube API of channel videos

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC0fiLCwTmAukotCXYnqfj0A&part=snippet%2Cid&order=date&maxResults=50';

//here we link the html element to our js. If there's no content available the value displayed will be null
const content = null || document.getElementById('content');

//options to the fetch method. We want to get results
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '348f023e0dmsh82d709342c328dcp1c9b54jsne51cd482054d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

//we'll be using asynchronous functions to elaborate our response from the API

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}

//we'll be using asynchronous anonymous automatic functions that will call itself during the loading of this application. Will also employ try/catch to approach possible exceptions during the code.

(async ()=> {
    try{
        //videos will give us the complete data, but in view we'll iterate over a html template to insert each video
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map( video => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <a href="youtube.com/${video.snippet.channelId}"><img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full"></a>
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
            </div>
        </div>
        `).slice(0,4).join('')} 
        `
        //this way we iterate over each element from the array (videos), create a sub-array of only for videos (slice method), insert a template of how the content will display and insert in each relevant part the direction inside the API the desired content, be the case of the image, description and title. Also joining them using join method with an empty string

    content.innerHTML = view;
    }catch (error){
        console.log(error);
    }
})();