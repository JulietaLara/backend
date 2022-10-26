const express = require('express');
const router = express.Router();
const{ check } = require('express-validator'); 
const { crearUsuario, loginUsuario, revalidarToken} = require('../Controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-token');

router.post('/', loginUsuario)

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La clave debe tener al menos 6 digitos').isLenght({min: 6}),
        validarCampos
    ],
    crearUsuario
 )

router.post('/renew', validarJWT, revalidarToken)

module.exports = router; 