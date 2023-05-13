import { IUser, IUserMethods } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); //User -> class user -> instance
  await user.save(); //build in instance methods
  console.log(user.fullName()); // custom  instance methods
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDb = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    { name: 1, email: 1, contactNo: 1 }
  );
  return user;
};

export const getAdminUsersFromDB = async (): Promise<IUser> => {
  const admins = await User.getAdminUsers();
  return admins;
};
