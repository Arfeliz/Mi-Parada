import express, { Request, Response } from "express";
import { createTime } from '../service/time.service';
import { ApiResponse, ErrorResponse } from "../types/response.types";
import {  Time } from "../models/time.model";

const router = express.Router();

router.post('/create-time', async (req:Request, res:Response) => {
    try{
        const { body} = req;

        const time = await createTime({...(body && body || {})})

        return res.status(201).json({
                    success: true,
                    timestamp: Date.now().toLocaleString(),
                    data: time,
                } as ApiResponse<Time>)

    } catch(err){
         console.error('[ERROR]: something went wrong creating a time: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong creating a time: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)

    }
});

router.get('/get-all-time', async (_: Request, res: Response)  => {
    try {
        return res.status(200).json({ 
            success: true,
            timestamp: Date.now().toLocaleString(),
            data: await Time.findAll(),
        } as ApiResponse<Time[]>)
    } catch (err) {
        console.error('[ERROR]: something went wrong fetching all the time: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong fetching all the time: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)
    }
})


export default router;