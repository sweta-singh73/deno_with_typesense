import { Router } from "../../deps.ts";
import { verifyToken } from "../middlewares/auth.ts";
import  authRoutes  from "../modules/auth/auth.routes.ts";
import bookRoutes from "../modules/book/book.routes.ts"

const router = Router();

router.use("/auth", authRoutes);
router.use("/book", verifyToken, bookRoutes);

export default router;