
import { Router } from 'express';

import * as users from '../controllers/usersControllers'

export const router = Router();

router.get('/', users.usersGet);

router.post('/', users.usersPost);

router.put('/:id', users.usersPut);

router.delete('/', users.usersDelete);