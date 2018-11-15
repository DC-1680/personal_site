const express = require('express')
const path = require('path')
const volleyball = require('volleyball')

const PORT = process.env.PORT || 8080

const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('body-parser').urlencoded());

// static middleware
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV !== 'production') require('./secrets');

var mailer = require('nodemailer').createTransport({
	service: 'Gmail',
	auth: {
		user: process.env.GMAIL_ADDRESS,
		pass: process.env.GMAIL_PASSWORD,
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'))
}); // Send index.html for any other requests


app.post('/contact', (req, res, next) => {
	mailer.sendMail({
		from: req.body.from,
		to: [process.env.GMAIL_ADDRESS],
		subject: req.body.subject || '[No subject]',
		html: `FROM: ${req.body.name} Email: ${req.body.email} ${req.body.message}` || '[No message]',
	}, (err) => {
		if (err) next(err);
		res.sendStatus(200);
	})
});

// error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal server error')
});

app.listen(PORT, () =>
	console.log(`Mixing it up on port ${PORT}`)
);

module.exports = app;
