import { Transport } from "../models/transport.model";

export const createTransport = async (data: Partial<Transport>) => {
    const transport = await Transport.create(data);

    console.log('Transport created: ', JSON.stringify(transport.toJSON()))

    return transport;
}

export const getAllTransport = async () => {
    const transport = await Transport.findAll();

    console.log('Transport created: ', JSON.stringify(transport))

    return transport;
}
