/* eslint-disable max-len */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.show);
// router.get('/', loginRequired, userController.index);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> listagem de usuários -> GET
show -> mostra/detalhes de um usuário -> GET
store/create -> criar um usuário -> POST
update -> alterar/atualizar um usuário -> PUT ou PATCH (PATCH = atualizar parcialmente eo PUT = atualizar tudo) um usuário/objeto
destroy/delete -> apagar um usuário -> DELETE
*/
