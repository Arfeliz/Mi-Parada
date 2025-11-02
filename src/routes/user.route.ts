import express, { Request, Response } from "express";
import { createUser } from '../service/user.service';
import { ApiResponse, ErrorResponse } from "../types/response.types";
import {User } from "../models/user.model";

const router = express.Router();

router.post('/create-user', async (req:Request, res:Response) => {
    try{
        const { body} = req;

        const user = await createUser({...(body && body || {})})

        return res.status(201).json({
                    success: true,
                    timestamp: Date.now().toLocaleString(),
                    data: user,
                } as ApiResponse<User>)

    } catch(err){
         console.error('[ERROR]: something went wrong creating a user: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong creating a user: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)

    }
});

router.get('/get-all-user', async (_: Request, res: Response)  => {
    try {
        return res.status(200).json({ 
            success: true,
            timestamp: Date.now().toLocaleString(),
            data: await User.findAll(),
        } as ApiResponse<User[]>)
    } catch (err) {
        console.error('[ERROR]: something went wrong fetching all the user: ', err);
        return res.status(500).json({
            message: `[ERROR]: something went wrong fetching all the user: ${err}`,
            error: err,
            timestamp: Date.now().toLocaleString(),
        } as ErrorResponse)
    }
})


export default router;