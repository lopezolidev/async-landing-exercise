const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCzolMvIqyoK6hV345m6FjTg&part=snippet%2Cid&order=date&maxResults=5';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '348f023e0dmsh82d709342c328dcp1c9b54jsne51cd482054d',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(url) {
        const response = await fetch(url, options);
        
        const result = await response.json();
        
        return result
   
}   // asynchronous function that returns the expected data from the API

(async ()=> {
    try{
        //videos will give us the complete data, but in view we'll iterate over a html template to insert each video
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map( video => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
            <a href="https://www.youtube.com/@ChilloutDeer">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </a>
            </h3>
            </div>
        </div>
        `).slice(0,4).join('')} 
        `
        
    content.innerHTML = view;
    }catch (error){
        console.log(error);
    }
})();