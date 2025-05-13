import { Router } from 'express';
import { SignIn, SignUp } from '../controllers/controller';

const routes = Router();

routes.post('/signUp', SignUp);
routes.post('/signIn',SignIn);

export { routes };