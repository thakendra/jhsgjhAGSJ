export default require('@google/maps').createClient({
	key: process.env.GOOGLE_MAPS_API_KEY,
	Promise: Promise
}) 