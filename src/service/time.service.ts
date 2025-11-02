import {Time} from '../models/time.model'

export const createStopStation = async (data: Partial<Time>) => {
    const time = await Time.create(data);

    console.log('User created: ', JSON.stringify(time.toJSON()))

    return time;
}

export const getAllUser = async () => {
    const time = await Time.findAll();

    console.log('Product created: ', JSON.stringify(time))

    return time;
}