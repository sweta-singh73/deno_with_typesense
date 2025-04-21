import { jwt } from '../../deps.ts';
import { Request, Response, NextFunction } from "../../deps.ts";
import { User, AuthenticatedUser } from "../models/user.model.ts";


const JWT_SECRET_KEY = "hjgkjfhkjhkljjgkfrgfrjgjg";

export const verifyToken = async (
  req: Request & { user?: AuthenticatedUser }, 
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if (!token) {
      res.status(400).json({ error: "Authorization token is required" });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET_KEY) as { id: string };
    const user = await User.findById(decoded.id);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    req.user = user;
    next(); 
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.name === "JsonWebTokenError") {
        res.status(401).json({ error: "Invalid token" });
        return;
      }
      if (error.name === "TokenExpiredError") {
        res.status(401).json({ error: "Token has expired" });
        return;
      }
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(500).json({ error: "An unknown error occurred" });
  }
};
