export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push("/sign-up")
}

export const goToFeedPage = (history) => {
    history.push("/home")
}

export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}