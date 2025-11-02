import { StopStation } from "../models/stopStations.model";

export const createStopStation = async (data: Partial<StopStation>) => {
    const stopStation = await StopStation.create(data);

    console.log('StopStation created: ', JSON.stringify(stopStation.toJSON()))

    return stopStation;
}

export const getAllStopStation = async () => {
    const stopStation = await StopStation.findAll();

    console.log('StopStation created: ', JSON.stringify(stopStation))

    return stopStation;
}
