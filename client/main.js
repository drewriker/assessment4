const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const motivationBtn = document.getElementById("motivationButton");
const goalSubmit = document.getElementById("goal-form");
const randomActBtn = document.getElementById("randomActButton");
const baseURL = "http://localhost:4000/api/";

const getCompliment = () => {
	axios.get(`${baseURL}compliment/`).then((res) => {
		const data = res.data;
		alert(data);
	});
};

const getFortune = () => {
	axios.get(`${baseURL}fortune/`).then((res) => {
		const data = res.data;
		alert(data);
	});
};

const getMotivation = () => {
	axios.get(`${baseURL}motivation/`).then((res) => {
		const data = res.data;
		alert(data);
	});
};

const getRandomAct = () => {
	axios.get(`${baseURL}random-act/`).then((res) => {
		const data = res.data;
		alert(data);
	});
};

function submitHandler(e) {
	e.preventDefault();

	let goal = document.getElementById("goal");
	let timeline = document.getElementById("timeline");
	let category = document.getElementById("goal-select");

	let bodyObj = {
		goal: goal.value,
		timeline: timeline.value,
		category: category.value,
	};

	axios.post(`${baseURL}goals/`, bodyObj).then((res) => {
		const { goal, timeline, category } = res.data;
		alert(
			`You made the ${category} goal to "${goal}" and you want to complete it in ${timeline}`
		);
	});
}

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
motivationBtn.addEventListener("click", getMotivation);
randomActBtn.addEventListener("click", getRandomAct);
goalSubmit.addEventListener("submit", submitHandler);
