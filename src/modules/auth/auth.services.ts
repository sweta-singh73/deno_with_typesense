import { createToken, securePassword } from './auth.helper.ts';
import { User } from "../../models/user.model.ts";
import { bcrypt } from "../../../deps.ts";


//======================== Find User By Email ======================//

export const findUser = async (email: string) => {
  const checkUserExist = await User.findOne({ email });
  return checkUserExist ? { message: "User already exists" } : null;  
};

//======================== Register Service ======================//

export const register = async (data: { name: string; email: string; password: string }) => {
  const { name, email, password } = data;

  const existingUser = await findUser(email);
  if (existingUser) {
    return existingUser; 
  }

  const hashPassword = await securePassword(password);
  const newUser = new User({
    name,
    email,
    password: hashPassword,
  });

  return await newUser.save();
};

//======================== Login Service ======================//

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = createToken(user._id.toString());

  return {
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};
