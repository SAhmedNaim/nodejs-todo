import models from "../models/data-models";
import { UserViewModel } from "../models/view-models/user-view-model";

export const getAllUsers = async () => {
    const User = models.User;
    const users = await User.find();
    let viewModels = users.map(user => new UserViewModel(user));
    return viewModels;
}
