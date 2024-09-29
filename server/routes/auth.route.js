import express from 'express';
import { signUpController } from '../controllers/signUp.controller.js';
import { signInController } from '../controllers/signIn.controller.js';
import { logoutController } from '../controllers/logout.controller.js';
import { authenticateToken } from '../middlewares/token.js';

const router = express.Router();

router.post('/sign-up' , signUpController);
router.post('/sign-in', signInController);
router.post('/logout',authenticateToken,logoutController)

export default router;