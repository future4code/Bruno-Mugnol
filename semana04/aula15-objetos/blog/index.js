let objectsArray = []
let stringArray = []
let submissionCounter = 0

const createObject = () => {
    const titleElement = document.getElementById("titulo-post")
    const authorElement = document.getElementById("autor-post")
    const textElement = document.getElementById("conteudo-post")
    const picElement = document.getElementById("pic-post")
    const blogPost = {
        title: titleElement.value,
        author: authorElement.value,
        content: textElement.value,
        picture: picElement.value
    }
    return blogPost
}

const storeObject = () => {
    objectsArray.push(createObject())
}

const clearForm = () => {
    const titleElement = document.getElementById("titulo-post")
    const authorElement = document.getElementById("autor-post")
    const textElement = document.getElementById("conteudo-post")
    const picElement = document.getElementById("pic-post")
    titleElement.value = ""
    authorElement.value = ""
    textElement.value = ""
    picElement.value = ""
}

const stringifyObject = () => {
    const stringedPost = JSON.stringify(createObject())
    return stringedPost
}

const submitPost = () => {
    const blogPost = createObject()
    const stringedBlogPost = JSON.stringify(blogPost)
    storeObject()
    clearForm()
    console.log(objectsArray)
    localStorage.clear()
    localStorage.setItem("postData", `${stringedBlogPost}`)
}

// O código comentado foi eliminado deste documento por termos criado uma nova página com as mesmas ações

// const printPost = (post) => {
//     const container = document.getElementById("container-de-posts")
//     container.innerHTML += `<h3>${post.title}</h3>
//     <h5>Autor(a): ${post.author}</h5>
//     <p>${post.content}</p>
//     <img src=${post.picture}>`
// }

// const submitPost = () => {
//     const blogPost = createObject()
//     storeObject()
//     clearForm()
//     printPost(blogPost)
//     console.log(objectsArray)
// }