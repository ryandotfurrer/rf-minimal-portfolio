const contentful = require('contentful');
const client = contentful.createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: 'ezgyl5rfr10x',
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: 'CFPAT-B_rZxOj3zcghi9wfEXTTLTNe1Tsw7_vFtpDKIp1wkTo',
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
client
	.getEntry('3EUgEY91tcswVVQV3B70uI')
	.then((entry) => console.log(entry))
	.catch((err) => console.log(err));
