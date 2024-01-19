import { Request, Response } from "express"

export const home = ( req:Request, res:Response ) => {
    console.log("homeController!!")

    return res.send(200).send("test")
}