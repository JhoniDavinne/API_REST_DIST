"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable max-len */
// eslint-disable-next-line import/no-extraneous-dependencies
var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get('/', userController.show);
// router.get('/', loginRequired, userController.index);

router.post('/', _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index -> listagem de usuários -> GET
show -> mostra/detalhes de um usuário -> GET
store/create -> criar um usuário -> POST
update -> alterar/atualizar um usuário -> PUT ou PATCH (PATCH = atualizar parcialmente eo PUT = atualizar tudo) um usuário/objeto
destroy/delete -> apagar um usuário -> DELETE
*/
