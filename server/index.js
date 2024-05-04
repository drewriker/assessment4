const express = require("express");
const cors = require("cors");

const app = express();
const {
	getCompliment,
	getFortune,
	postGoal,
	getMotivation,
	getRandomAct,
} = require("./controller");
const baseURL = "/api/";

app.use(cors());
app.use(express.json());

app.get(`${baseURL}compliment`, getCompliment);
app.get(`${baseURL}fortune`, getFortune);
app.get(`${baseURL}motivation/`, getMotivation);
app.get(`${baseURL}random-act/`, getRandomAct);
app.post(`${baseURL}goals/`, postGoal);

app.listen(4000, () => console.log("Server running on 4000"));
