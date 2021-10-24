import { Router } from "express";
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogout, ProcessRegisterPage } from "../controllers/user";

import passport from '../middlewares/auth';

const router = Router();

router.get('/get', DisplayLoginPage);
router.post('/login', passport.authenticate('login'), ProcessLoginPage);

router.get('/register', DisplayRegisterPage);
router.post('/register', ProcessRegisterPage);

router.get('/logout', ProcessLogout);

export default router;