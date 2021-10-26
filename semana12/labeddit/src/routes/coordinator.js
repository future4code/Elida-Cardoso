export const goToLoginPage = (history) => {
    history.push("/login")
};

export const goToSingUpPage = (history) => {
    history.push("/singup")
};

export const goToFeedPage = (history) => {
    history.push("/")
};

export const goToPostDetailsPage = (history, id) => {
    history.push(`/post/${id}`)
};
