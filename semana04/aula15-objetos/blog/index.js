let objectsArray = []

if (!localStorage.getItem('submissionsCounter')) {
    localStorage.setItem("submissionsCounter", "0")
}

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

const storeObjectInArray = () => {
    objectsArray.push(createObject())
}

const stringifyObject = () => {
    let stringedObject = JSON.stringify(createObject())
    return stringedObject
}

const countPosts = () => {
    currentCounter = Number(localStorage.getItem("submissionsCounter"))
    updatedCounterString = `${currentCounter + 1}`
    localStorage.setItem("submissionsCounter", `${updatedCounterString}`)
    return currentCounter
}

const updateLocalStorage = () => {
    localStorage.setItem(`${"postNumber" + countPosts()}`, `${stringifyObject()}`)
}

const submitPost = () => {
    if (checkValidity() && checkImage()) {
        storeObjectInArray()
        updateLocalStorage()
        clearForm()
    } else {
        alert("Por favor, preencha todos os campos corretamente.")
    }
}

const checkValidity = () => {
    const titleElement = document.getElementById("titulo-post")
    const authorElement = document.getElementById("autor-post")
    const textElement = document.getElementById("conteudo-post")
    let valid = false
    if ((titleElement.value !== "") && (authorElement.value !== "") && (textElement.value !== "")) {
        valid = true
    } else {
        valid = false
    }
    return valid
}

const checkImage = () => {
    const picElement = document.getElementById("pic-post")
    let validImage = false
    if (picElement.value.includes("jpeg") || picElement.value.includes("png") || picElement.value.includes("http") || picElement.value.includes(".com")) {
        validImage = true
    } else {
        validImage = false
    }
    return validImage
}