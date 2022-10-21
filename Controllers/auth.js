const express = require('express');
//encriptar la contra
const bcrypt = require('bcryptsjs')
const Usuario = require('../models/Usuario')

const crearUsuario = async (req, res = express.request) => {
    // res.json({
    //     ok:true
    // }) 
    const { name, email, password} = req.body //la request trae un body, dentro se envia el name, correo, pass
    try {
        let usuario  = await Usuario.findOne({email: email})
        //const usuario = new Usuario(req.body);
        if( usuario ){
            return res.status(400).json({
                ok:false,
                msg: 'El usuario con ese correo ya existe'
            })
        }
        usuario = new Usuario(req.body);
        //encriptar contra
        const salt = bcrypt.genSaltSync();
        usuario.password= bcrypt.hahSync(password, salt)
        await usuario.save();

        res.status(200).json({
            ok:true,
            usuario
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            error,
        })
    }
    
}

const loginUsuario = (req, res = express.request) => {
    res.json({
        ok:true
    })
}

const revalidarToken = (req, res = express.request) => {
    res.json({
        ok:true
    })
}

module.exports = {
    loginUsuario,
    crearUsuario,
    revalidarToken
}