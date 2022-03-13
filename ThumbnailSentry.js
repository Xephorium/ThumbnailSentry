
const users = [
	"Mark Zuckerberg",
	"Jeff Bezos",
	"Elon Musk"
];

function hideThumbnails() {
	users.forEach((user) => {

		// Assemble Element Query
		queries = 'a[title="' + user + '"] > img,'  	  // Thumbnails
			+ 'a[title="Picture by ' + user + '"] > img'; // Photos

		// Find Elements
		let elements = document.querySelectorAll(queries);

		// Replace Images
		elements.forEach((element) => {
		    element.src = "https://raw.githubusercontent.com/Xephorium/ThumbnailSentry/master/resources/sentry.png"
		});
	});
	console.log("Done")
}

window.addEventListener('DOMSubtreeModified', function () {
	hideThumbnails();
}, true);