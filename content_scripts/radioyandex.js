//EXAMPLE STRING FOR THE REGULAR EXPRESSION
//background-image: url(//avatars.yandex.net/get-music-content/117546/65758ce7.a.4885660-1/600x600)

async function onRun() {
	var artist = document.body.getElementsByClassName("player-controls__artists")[0].getAttribute("title").toString();
	var title = document.body.getElementsByClassName("player-controls__title")[0].getAttribute("title").toString();
	var coverUrl = document.body.getElementsByClassName("slider__item_playing")[0].getElementsByClassName("track__cover")[0].getAttribute("style").toString().split("//")[1].replace(")", "");
	console.log(artist + " - " + title);
	console.log(coverUrl);
}

setInterval(onRun, 1000);