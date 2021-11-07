import axios from "axios";
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator";

export const singUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeedPage(history)
        setRightButtonText("Logout")
    })
    .catch((error) => {
        alert(error.response.data)
    })
}

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeedPage(history)
        setRightButtonText("Logout")
    })
    .catch((error) => {
        alert(error.response.data)
    })
}