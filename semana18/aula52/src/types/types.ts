export type User = {
    user_id: string,
    email: string,
    role: "normal" | "admin",
    password: string
}

export type AddressByCEP = {
    street: string,
    neighbourhood: string,
    city: string,
    state: string
}

export type UserAddress = {
    address_id: string,
    street: string,
    number: string,
    neighbourhood: string,
    complement: string,
    city: string,
    state: string
}
