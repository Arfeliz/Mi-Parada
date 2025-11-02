import express, { Request, Response } from "express";
import { createStopStation } from '../service/stopStation.service';
import { ApiResponse, ErrorResponse } from "../types/response.types";
import { StopStation } from "../models/stopStations.model";

const router = express.Router();

router.post('/create-stopStation', async (req:Request, res:Response) => {
    try{
        const { body} = req;

        const stopStation = await createStopStation({...(body && body || {})})

        return res.status(201).json({
                    success: true,
                    timestamp: Date.now().toLocaleString(),
                    data: stopStation,
                } as ApiResponse<StopStation>)

    } catch(err){
         console.error('[ERROR]: something went wrong creating a stopStation: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong creating a stopStation: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)

    }
});

router.get('/get-all-stopStation', async (_: Request, res: Response)  => {
    try {
        return res.status(200).json({ 
            success: true,
            timestamp: Date.now().toLocaleString(),
            data: await StopStation.findAll(),
        } as ApiResponse<StopStation[]>)
    } catch (err) {
        console.error('[ERROR]: something went wrong fetching all the stopStation: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong fetching all the stopStation: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)
    }
})


export default router;