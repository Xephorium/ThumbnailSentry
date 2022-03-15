
/*  Thumbnail Sentry                               03.12.2022
 *
 *  A Firefox extension that dynamically replaces images of a
 *  particular format.
 */


/*--- Variables ---*/

const users = [
	"Mark Zuckerberg",
	"Jeff Bezos",
	"Elon Musk"
];

const sentryImage = browser.runtime.getURL("resources/sentry.png");

const startTime = (new Date()).getTime();
const pageLoadWindow = 5000;
const checkFrequency = 25;


/*--- Functions ---*/

function hideThumbnails() {
	users.forEach((user) => {

		// Assemble Search Query
		let query = 'a[title="' + user + '"] > img,'  	   // Thumbnails
			+ 'a[title^="Picture by ' + user + '"] > img'; // Photos

		// Find Matching Elements
		let elements = document.querySelectorAll(query);

		// Replace Image Source
		elements.forEach((element) => {
			if (element.src != sentryImage) {
				element.src = sentryImage;
				console.log("set!");
			}
		});
	});
}

// Note: Checks for thumbnails to replace every 'checkFrequency' ms
//       for the first 'pageLoadWindow' ms after page load. This is
//       my brute-force solution to the issue of race conditions.
function checkForThumbnailsOnPageLoad() {
	currentTime = (new Date()).getTime();
	if (currentTime > startTime + pageLoadWindow) {
		clearInterval(timer);
		return;
	}
	hideThumbnails()
}


/*--- Lifecycle Events ---*/


// Initiate Rapid Checking on Page Load
var timer = setInterval(checkForThumbnailsOnPageLoad, checkFrequency);

// Queue Up Active Change Listener
window.addEventListener('DOMSubtreeModified', function () {
	hideThumbnails();
}, true);