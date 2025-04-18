
import { login, register } from './auth.controllers.ts';

import { Router } from "../../../deps.ts";

const router = Router();

router.post("/register", register);
router.post("/login", login )


export default router;