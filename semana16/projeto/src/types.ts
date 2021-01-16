export type newUser = {
    username: string,
    nickname: string,
    email: string
}

export type editData = {
    username: string,
    nickname: string
}

export type newTask = {
    title: string,
    dueDate: string,
    status: "to do" | "doing" | "done",
    creatorId: number
    description: string
}