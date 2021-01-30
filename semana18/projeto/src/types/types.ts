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
