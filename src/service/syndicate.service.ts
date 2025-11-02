import {Syndicate} from '../models/syndicate.model'

export const createStopStation = async (data: Partial<Syndicate>) => {
    const syndicate = await Syndicate.create(data);

    console.log('User created: ', JSON.stringify(syndicate.toJSON()))

    return syndicate;
}

export const getAllUser = async () => {
    const syndicate = await Syndicate.findAll();

    console.log('Product created: ', JSON.stringify(syndicate))

    return syndicate;
}