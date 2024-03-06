const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const baseURL = "http://localhost:4000/api/"

const getCompliment = () => {
    axios.get(`${baseURL}compliment/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(`${baseURL}fortune/`)
    .then(res => {
        const data = res.data;
        alert(data);
    });
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune);
