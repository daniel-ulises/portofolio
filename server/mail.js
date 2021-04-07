const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
	// Get the data sent from the form
	const {name, email, message} = req.body;

	// Set the configuration from the email provider
	const transporter = nodemailer.createTransport({
		host: "smtp.office365.com",
		port: 587,
		secure: false,
		tls: {
			ciphers: "SSLv3",
		},
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	// Forward the emails sent to my main email
	const info = await transporter.sendMail({
		from: `"${name}" ${process.env.EMAIL_USER}`,
		to: "daniel.cau@pm.me",
		subject: `Contacted by ${email}`,
		text: message,
	});

	res.status(200).send({message: "Message sent!"});
});

module.exports = router;
