import { signupUser, homepage, authenticateUser } from '../controllers/AuthController';
import express from 'express';

const router = express.Router()

router.get('/', homepage);

router.post('/signup', signupUser)
router.post('/authenticate', authenticateUser);

export default router