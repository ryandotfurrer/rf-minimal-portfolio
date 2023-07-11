const contentful = require('contentful');

const client = contentful.createClient({
	space: 'ezgyl5rfr10x',
	environment: 'master', // defaults to 'master' if not set
	accessToken: 'HfMne0by97WNMNLgtg6AmmC7PJbjiyRQKgHdPX2skxc',
});

client
	.getEntry('3EUgEY91tcswVVQV3B70uI')
	.then((entry) => console.log(entry))
	.catch(console.error);
