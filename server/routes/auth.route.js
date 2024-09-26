import express from 'express';
import { signUpController } from '../controllers/signUp.controller.js';
import { signInController } from '../controllers/signIn.controller.js';

const router = express.Router();

router.post('/sign-up' , signUpController);
router.post('/sign-in', signInController);

export default router;