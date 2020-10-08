let objectsArray = []

const checkCounter = () => {
    postCount = Number(localStorage.getItem("submissionsCounter")) - 1
    return postCount
}

const processData = () => {
    for (let i = 0; i <= checkCounter(); i++) {
        objectsArray[i] = JSON.parse(localStorage.getItem(`${"postNumber" + i}`))
    }
    console.log(objectsArray)
}

const printPost = (post) => {
    const container = document.getElementById("container-de-posts")
    container.innerHTML += `<h3>${post.title}</h3>
    <h5>Autor(a): ${post.author}</h5>
    <p>${post.content}</p>
    <img src=${post.picture}>`
}

processData()
for (let i=0; i <= checkCounter(); i++) {
    printPost(objectsArray[i])
}