import express from "express";
import { deleteClient, getAllClients, getClient, updateClient } from "../controllers/client.js";
import {verifyToken, verifyClient, verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
//  })

//  router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })
 
//UPDATE
router.put("/:id", verifyClient, updateClient);

//DELETE
router.delete("/:id", verifyClient, deleteClient);

//GET
router.get("/:id", verifyClient, getClient);

//GET ALL
router.get("/", verifyAdmin, getAllClients);

export default router;