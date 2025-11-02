import {Syndicate} from '../models/syndicate.model'

export const createSyndicate = async (data: Partial<Syndicate>) => {
    const syndicate = await Syndicate.create(data);

    console.log('Syndicate created: ', JSON.stringify(syndicate.toJSON()))

    return syndicate;
}

export const getAllSyndicate = async () => {
    const syndicate = await Syndicate.findAll();

    console.log('Syndicate created: ', JSON.stringify(syndicate))

    return syndicate;
}