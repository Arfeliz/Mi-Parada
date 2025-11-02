import { User } from "../models/user.model";

export const createUser = async (data: Partial<User>) => {
    const user = await User.create(data);

    console.log('User created: ', JSON.stringify(user.toJSON()))

    return user;
}

export const getAllUser = async () => {
    const user = await User.findAll();

    console.log('User created: ', JSON.stringify(user))

    return user;
}

