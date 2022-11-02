const express = require('express');
const bcrypt = require('bcryptsjs')
const Task = require('../models/Task')


const crearTask = async (req, res = express.request) => {
    const task = new Task( req.body );

    try {
        task.user = req.uid;
        const saved = await task.save(); 
        res.json({
            ok:true,
            task: saved
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            task: 'Internal error'
        })
    }
}

const listarTasks = async (req, res = express.request) => {
    const tasks = await Task.find().populate('user', 'name');

    try {
        
        res.status(200).json({
            ok: true,
            tasks
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            task: 'Internal error'
        })
    }
}

const actualizarTasks = async (req, res = express.request) => {
    
}
const eliminarTasks = async (req, res = express.request) => {
    
}


module.exports = {
    crearTask,
    listarTasks,
    actualizarTasks,
    eliminarTasks
}