export type UserLogin = {
    email: string;
    password: string;
}

export type UserInfo = UserLogin & {
    fullName: string;
}
