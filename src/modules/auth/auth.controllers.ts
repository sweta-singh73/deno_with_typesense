import type { Request, Response } from "../../../deps.ts"; 
import { container } from "../../dependencies/container.ts";

//=============================== Register ===========================//

export const register = async (req: Request, res: Response) => {
  try {
    const user = await container.authService.register(req.body);
    res.status(200).json({message:"User Register Successfully", data:user});
  } catch (err) {
    res.status(400).json({ msg: (err as Error).message });
  }
};

//=============================== Login ===========================//

export const login = async (req: Request, res: Response) => {
  try {
    const user = await container.authService.login(req.body.email, req.body.password);
    res.status(200).json({message: "User login successfully", data:user});
  } catch (err) {
    res.status(401).json({ msg: (err as Error).message });
  }
};
