import { Router } from "../../deps.ts";
import  authRoutes  from "../modules/auth/auth.routes.ts";
import bookRoutes from "../modules/book/book.routes.ts"

const router = Router();

router.use("/auth", authRoutes);
router.use("/book", bookRoutes);

export default router;