import { Transport } from "../models/transport.model";

export const createStopStation = async (data: Partial<Transport>) => {
    const transport = await Transport.create(data);

    console.log('User created: ', JSON.stringify(transport.toJSON()))

    return transport;
}

export const getAllUser = async () => {
    const transport = await Transport.findAll();

    console.log('Product created: ', JSON.stringify(transport))

    return transport;
}
