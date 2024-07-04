export type User = {
    id: number;
    name: string;
    email: string;
}

export type UserWithoutId = Omit<User, 'id'>
export type UserWithoutIdwithPassword = Omit<User, 'id'> & {password: string}
export type UserWithoutName = Omit<UserWithoutIdwithPassword, 'name'>
