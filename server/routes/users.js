import express from "express";
import { getUser, update, deleteUser, follow, unFollow } from "../controller/user.js"
import { verifyToken } from "../verifyTokens.js";

const router = express.Router();

//Update
router.put('/:id', verifyToken, update)

//Get User
router.get('/find/:id', getUser)

//Delete User
router.delete('/:id', verifyToken, deleteUser)

//Follow
router.put('/follow/:id', verifyToken, follow)

//UnFollow
router.put('/unfollow/:id', verifyToken, unFollow)

export default router;