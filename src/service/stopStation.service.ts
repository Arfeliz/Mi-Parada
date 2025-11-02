import { StopStation } from "../models/stopStations.model";

export const createStopStation = async (data: Partial<StopStation>) => {
    const stopStation = await StopStation.create(data);

    console.log('User created: ', JSON.stringify(stopStation.toJSON()))

    return stopStation;
}

export const getAllUser = async () => {
    const stopStation = await StopStation.findAll();

    console.log('Product created: ', JSON.stringify(stopStation))

    return stopStation;
}
