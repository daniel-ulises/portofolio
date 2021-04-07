import React, {useState} from "react";

export default function Contact() {
	const [isDisabled, setDisabled] = useState(false);
	const [isSent, setSent] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		setDisabled(true);
		setSent("");

		fetch(process.env.REACT_APP_EMAIL_API, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				name: e.target.name.value,
				email: e.target.email.value,
				message: e.target.message.value,
			}),
		})
			.then(response => response.json())
			.then(() => {
				setSent("sent");
				setDisabled(false);
				e.target.reset();
			})
			.catch(err => {
				setSent("error");
				setDisabled(false);
			});
	};

	return (
		<div className="contact-form" id="contact">
			<form method="POST" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" disabled={isDisabled} />
				</div>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" disabled={isDisabled} />
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						rows="10"
						disabled={isDisabled}
					></textarea>
				</div>
				<div>
					<button type="submit" disabled={isDisabled}>
						Submit
					</button>
				</div>
			</form>
			<div className="email-notify">
				<div className={isSent === "sent" ? "msg-success animate-slide-in" : "msg-success"}>
					<i class="far fa-check-circle"></i>
					<span>Email sent!</span>
				</div>
				<div className={isSent === "error" ? "msg-error animate-slide-in" : "msg-error"}>
					<i class="fas fa-times"></i>
					<span>Something went wrong!</span>
				</div>
			</div>
			<div className="footer-icons">
				<a
					href="https://linkedin.com/in/daniel-ulises"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-linkedin"></i>
				</a>
				<a
					href="https://github.com/daniel-ulises"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-github-square"></i>
				</a>
			</div>
		</div>
	);
}
