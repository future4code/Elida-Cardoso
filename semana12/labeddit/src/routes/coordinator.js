export const goToLoginPage = (history) => {
    history.push("/login")
};

export const goToSignUpPage = (history) => {
    history.push("/signup")
};

export const goToFeedPage = (history) => {
    history.push("/")
};

export const goToPostDetailsPage = (history, id) => {
    history.push(`/post/${id}`)
};
