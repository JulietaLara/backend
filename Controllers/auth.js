const express = require('express');

const crearUsuario = (req, res = express.request) => {
    // res.json({
    //     ok:true
    // }) 
    const { name, email, password} = req.body //la request trae un bodt, dentro se envia el name, correo, pass
    res.status(200).json({
        ok:true,
        name, email, password
    })
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