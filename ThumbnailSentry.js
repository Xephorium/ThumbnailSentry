
/*  Thumbnail Sentry                               03.12.2022
 *
 *  A Firefox extension that dynamically replaces images of a
 *  particular format.
 */


/*--- Constants ---*/

const users = [
	"Mark Zuckerberg",
	"Jeff Bezos",
	"Elon Musk"
];


/*--- Functions ---*/

function hideThumbnails() {
	users.forEach((user) => {

		// Assemble Search Query
		query = 'a[title="' + user + '"] > img,'  	   // Thumbnails
			+ 'a[title^="Picture by ' + user + '"] > img'; // Photos

		// Find Matching Elements
		let elements = document.querySelectorAll(query);

		// Replace Image Source
		elements.forEach((element) => {
		    element.src = "https://raw.githubusercontent.com/Xephorium/ThumbnailSentry/master/resources/sentry.png"
		});
	});
}


/*--- Lifecycle Events ---*/

window.addEventListener('DOMSubtreeModified', function () {
	hideThumbnails();
}, true);