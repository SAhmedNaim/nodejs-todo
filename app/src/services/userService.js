import models from "../models/data-models";

export const getAllUsers = async () => {
    const User = models.User;
    const users = await User.find();
    return users;
}
