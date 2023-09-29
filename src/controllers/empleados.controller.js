const empleadoCtrl = {};
const Empleado = require('../models/Empleado')
const nodemailer = require("nodemailer");

// const mongoose = require('mongoose');

// port: 587,
// secure: false, 
// requireTLS: true,
// logger: true,
// debug: true,

const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'areaspepelucho@gmail.com',
      pass: 'ayapjimxrdlgtsgj'
    }
});



empleadoCtrl.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json({ data: empleados, status: "success" });
        // res.json(empleados);
        //res.send('get empleados')

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


empleadoCtrl.createEmpleado = async (req, res) => {
    try {
        const empleado = new Empleado({
            nombre: req.body.nombre,
            cargo: req.body.cargo,
            departamento: req.body.departamento,
            sueldo: req.body.sueldo,
            correo: req.body.correo
        });
        console.log(empleado);
        await empleado.save();

        // await transporter.sendMail({
        //     from: 'areaspepelucho@gmail.com', // sender address
        //     to: 'sanchezbaquejoseluis@gmail.com', // list of receivers
        //     subject: "Hello ✔", // Subject line
        //     text: "Hello world?", // plain text body
        //     html: "<b>Hello world?</b>", // html body
        // });
        await transporter.sendMail({
            from: '"Fred Foo 👻" <noreply@test.com>', // sender address
            to: req.body.correo, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        //res.json('status: Datos guardados');
        res.json({ data: empleado, status: "success" });


    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


empleadoCtrl.getEmpleado = async (req, res) => {
    try {

        const idEmp = req.params.id;
        const empl = await Empleado.findById({ _id: idEmp });
        // res.send({_id: id});

        if (!empl) {
            return res.status(404).json({
                message: 'No tenemos ese empleado'
            })
        }

        res.json({ data: empl, status: "success" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
empleadoCtrl.editEmpleado = async (req, res) => {
    try {
        const empl = await Empleado.findByIdAndUpdate(req.params.id, req.body);

        if (!empl) {
            return res.status(404).json({
                message: 'No tenemos ese empleado'
            })
        }

        res.json({ data: empl, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
empleadoCtrl.deleteEmpleado = async (req, res) => {
    try {
        const empl = await Empleado.findByIdAndDelete(req.params.id);

        if (!empl) {
            return res.status(404).json({
                message: 'No tenemos ese empleado'
            })
        }

        res.json({ data: empl, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
module.exports = empleadoCtrl;