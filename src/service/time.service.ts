import {Time} from '../models/time.model'

export const createTime = async (data: Partial<Time>) => {
    const time = await Time.create(data);

    console.log('Time created: ', JSON.stringify(time.toJSON()))

    return time;
}

export const getAllTime = async () => {
    const time = await Time.findAll();

    console.log('Time created: ', JSON.stringify(time))

    return time;
}