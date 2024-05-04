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
	getMotivation: (req, res) => {
		const motivation = [
			`"The only way to do great work is to love what you do." - Steve Jobs`,
			`"Believe you can and you're halfway there." - Theodore Roosevelt`,
			`"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
			`"Don't watch the clock; do what it does. Keep going." - Sam Levenson`,
			`"The road to success and the road to failure are almost exactly the same." - Colin R. Davis`,
			`"Success is walking from failure to failure with no loss of enthusiasm." - Winston S. Churchill`,
			`"Hardships often prepare ordinary people for an extraordinary destiny." - C.S. Lewis`,
		];

		// choose random quote
		let randomIndex = Math.floor(Math.random() * motivation.length);
		let randomMotivation = motivation[randomIndex];

		res.status(200).send(randomMotivation);
	},

	getRandomAct: (req, res) => {
		const randomActsOfKindness = [
			"Hold the door open for someone.",
			"Leave a kind note for a friend or family member.",
			"Help someone carry their groceries.",
			"Pay for someone's meal or coffee anonymously.",
			"Send a thank-you email or message to someone who has helped you recently.",
			"Offer to walk a neighbor's dog or help with their yard work.",
		];

		// choose random quote
		let randomIndex = Math.floor(Math.random() * randomActsOfKindness.length);
		let randomAct = randomActsOfKindness[randomIndex];

		res.status(200).send(randomAct);
	},
};
