import axios from "axios";

const instance = axios.create({
	baseURL: "https://tinder-back-end-clone.herokuapp.com/",
});

export default instance;
