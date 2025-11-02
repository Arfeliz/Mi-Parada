import express, { Request, Response } from "express";
import { createSyndicate } from '../service/syndicate.service';
import { ApiResponse, ErrorResponse } from "../types/response.types";
import {  Syndicate } from "../models/syndicate.model";

const router = express.Router();

router.post('/create-syndicate', async (req:Request, res:Response) => {
    try{
        const { body} = req;

        const syndicate = await createSyndicate({...(body && body || {})})

        return res.status(201).json({
                    success: true,
                    timestamp: Date.now().toLocaleString(),
                    data: syndicate,
                } as ApiResponse<Syndicate>)

    } catch(err){
         console.error('[ERROR]: something went wrong creating a syndicate: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong creating a syndicate: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)

    }
});

router.get('/get-all-syndicate', async (_: Request, res: Response)  => {
    try {
        return res.status(200).json({ 
            success: true,
            timestamp: Date.now().toLocaleString(),
            data: await Syndicate.findAll(),
        } as ApiResponse<Syndicate[]>)
    } catch (err) {
        console.error('[ERROR]: something went wrong fetching all the syndicate: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong fetching all the syndicate: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)
    }
})


export default router;