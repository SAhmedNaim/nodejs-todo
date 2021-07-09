import express from "express";
import { getAllUsers } from "../services/userService";

const router = express.Router();

const getHandler = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        return next(error, req, res);
    }
};

router.get('/', getHandler);

export default router;