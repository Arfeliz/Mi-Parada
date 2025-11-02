import express, { Request, Response } from "express";
import { createTransport } from '../service/transport.service';
import { ApiResponse, ErrorResponse } from "../types/response.types";
import {  Transport } from "../models/transport.model";

const router = express.Router();

router.post('/create-transport', async (req:Request, res:Response) => {
    try{
        const { body} = req;

        const transport = await createTransport({...(body && body || {})})

        return res.status(201).json({
                    success: true,
                    timestamp: Date.now().toLocaleString(),
                    data: transport,
                } as ApiResponse<Transport>)

    } catch(err){
         console.error('[ERROR]: something went wrong creating a transport: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong creating a transport: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)

    }
});

router.get('/get-all-transport', async (_: Request, res: Response)  => {
    try {
        return res.status(200).json({ 
            success: true,
            timestamp: Date.now().toLocaleString(),
            data: await Transport.findAll(),
        } as ApiResponse<Transport[]>)
    } catch (err) {
        console.error('[ERROR]: something went wrong fetching all the transport: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong fetching all the transport: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)
    }
})


export default router;