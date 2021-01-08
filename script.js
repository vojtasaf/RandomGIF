function generateGif() {
	var request = new XMLHttpRequest();

	var key = config.apiKey;

	var tag = document.getElementById("tag").value;

	console.log(tag);

	request.open(
		"GET",
		"https://api.giphy.com/v1/gifs/random?tag=" + tag + "&api_key=" + key
	);

	request.onload = function () {
		var response = request.response;
		var parsedData = JSON.parse(response);
		console.log(parsedData);

		var originalUrl = parsedData.data.images.original.url;
		console.log(originalUrl);

		var gif = document.getElementById("gif");
		gif.setAttribute("src", originalUrl);
	};

	request.send();
}
