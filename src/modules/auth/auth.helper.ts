// Your file (where securePassword function is defined)
import { bcrypt, jwt } from "../../../deps.ts";

export const securePassword = async (password: string) => {
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        return passwordHash;
    } catch (err) {
        return {msg: (err as Error).message  };
    }
};

// Creates a JWT token for a given user ID
export const createToken = (id: string): string => {
  try {
    if (!Deno.env.get("JWT_SECRET_KEY")) {
      throw new Error("JWT_SECRET_KEY is not defined in environment variables.");
    }

    const token = jwt.sign({ _id: id }, Deno.env.get("JWT_SECRET_KEY") as string);
    return token;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};