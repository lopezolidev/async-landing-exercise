const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCzolMvIqyoK6hV345m6FjTg&part=snippet%2Cid&order=date&maxResults=5';

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
        
        console.log(result.items[0].snippet.thumbnails.high.url)
   
}   // asynchronous function that returns the expected data from the API

fetchData(url)