export type authenticationData = {
    id: string,
    role: USER_ROLES
}

export enum USER_ROLES {
    NORMAL = "normal",
    ADMIN = "admin"
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export type recipe = {
    id: string,
    title: string,
    description: string,
    created_at: string,
    creator_id: string
}
