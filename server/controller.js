module.exports = {
	getCompliment: (req, res) => {
		const compliments = [
			"Gee, you're a smart cookie!",
			"Cool shirt!",
			"Your Javascript skills are stellar.",
		];

		// choose random compliment
		let randomIndex = Math.floor(Math.random() * compliments.length);
		let randomCompliment = compliments[randomIndex];

		res.status(200).send(randomCompliment);
	},
	getFortune: (req, res) => {
		const fortune = [
			"A pleasant surprise awaits you later this week.",
			"Your hard work will pay off in unexpected ways.",
			"Good things come to those who wait; be patient.",
			"You will make a new friend who will greatly influence your life.",
			"Opportunities for advancement in your career are on the horizon.",
			"A creative endeavor will lead to great success.",
			"Travel is in your future; be open to new experiences.",
		];

		// choose random fortune
		let randomIndex = Math.floor(Math.random() * fortune.length);
		let randomFortune = fortune[randomIndex];

		res.status(200).send(randomFortune);
	},
	postGoal: (req, res) => {
		res.status(200).send(req.body);
	},
};
