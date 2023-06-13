function getCurrentYear() {
	let footerYear = document.querySelector('#footer-year'); // Grab span element containing year in footer
	const date = new Date(); // Gets current date
	const year = date.getFullYear().toString(); // Gets current year from date and converts it to a string

	footerYear.innerHTML = year; // Changes year in footer
}

getCurrentYear();
