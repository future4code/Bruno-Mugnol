let objectsArray = []

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

const submitPost = () => {
    const blogPost = createObject()
    storeObject()
    clearForm()
    printPost(blogPost)
    console.log(objectsArray)
}