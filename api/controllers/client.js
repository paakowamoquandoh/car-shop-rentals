import Client from "../models/client.js"

//update
export const updateClient = async (req,res,next)=>{
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedClient)
       } catch (err) {
        next(err)
       }
}

//delete
export const deleteClient = async (req,res,next)=>{
    try {
        await Client.findByIdAndDelete(req.params.id)
        res.status(200).json("Client has been deleted")
       } catch (err) {
        next(err)
       }
}

//get
export const getClient = async (req,res,next)=>{
    try {
        const client = await Client.findById(req.params.id)
        res.status(200).json(client)
       } catch (err) {
        next(err)
       }
}

//getall
export const getAllClients = async (req,res,next)=>{
    try {
        const client = await Client.find()
        res.status(200).json(client)
       } catch (err) {
        next(err)
       }
}


