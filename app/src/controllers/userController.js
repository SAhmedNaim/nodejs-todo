import express from "express";
import { getAllUsers, getUserById, saveUser } from "../services/userService";
import { handleValidation } from "../middlewares";
import validators from "../models/request-models";

const router = express.Router();

const getHandler = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        return next(error, req, res);
    }
};

const getByIdHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        if (user) {
            res.status(200).send(user);
        }
        else {
            throw new NotFound('User not found by the id: ' + id);
        }
    } catch (error) {
        return next(error, req, res);
    }
};

const postHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const id = await saveUser(body);
        res.status(201).send(id);
    } catch (error) {
        return next(error, req, res);
    }
};

router.get('/', getHandler);
router.get('/:id', getByIdHandler);
router.post('/', handleValidation(validators.userSchemaValidate), postHandler);

export default router;