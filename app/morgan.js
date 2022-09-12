const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const rfs = require('rotating-file-stream')

const logDirectory = path.join(__dirname, '../log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
let accessLogStream = rfs('access.log', {
	interval: '1d', // rotate daily i.e new file creation
	path: logDirectory,
})

morgan.token('date', function() {
	return new Date().toString()
})
// setup the logger
module.exports = function(app) {
	// if (process.env.NODE_ENV === 'production') {
	// 	app.use(morgan('combined', { stream: accessLogStream }))
	// } else {
	if (process.env.NODE_ENV !== 'production') {
		/* :method :url :status :response-time ms - :res[content-length] date */
		// app.use(
		// 	morgan('dev', {
		// 		skip: function(req, res) {
		// 			return res.statusCode < 400
		// 		},
		// 		stream: process.stderr,
		// 	})
        // )

		// app.use(
		// 	morgan('dev', {
		// 		skip: function(req, res) {
		// 			return res.statusCode >= 400
		// 		},
		// 		stream: process.stdout,
		// 	})
        // )
        
		app.use(morgan('dev'))
		app.use(morgan((tokens, req, res) => tokens.date(req, res)))
	}
}
