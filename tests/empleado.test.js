var request = require('supertest')
var app = require('../src/app.js')
// var app from "../src/routes/empleados.routes"

var request = request("http://localhost:3000/api/")

describe('Empleados', function () {

    describe('GET - obtener Lista de Empleado', function () {
        it('Debería devolver json como formato de datos predeterminado', function (done) {
            request.get('empleados')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });


    describe('POST - Guardar empleado', function () {
        it('Debería devolver el código de estado 200 si se creado el empleado y el encabezado de ubicación', function (done) {

            let empleado = {
                "nombre": "jose test",
                "cargo": "desarrollador test",
                "departamento": "sistemas test",
                "sueldo": 1400,
                "correo": "sanchezbaquejoseluis@gmail.com"
            }

            request.post('empleados')
                .send(empleado)
                .set("Aceptado", "application/json")
                .expect("Content-Type", /json/)
                .expect(200)
                .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });
    });


    describe('PUT - Actualizar empleado', function () {
        it('Debería devolver el código de estado 200 si se actualizo el empleado y el encabezado de ubicación', function (done) {

            let idEmpleado = '65176b08aa1866c80346e550';
            let empleado = {
                "nombre": "jose test update",
                "cargo": "desarrollador test update ",
                "departamento": "sistemas test",
                "sueldo": 1400,
                "correo": "sanchezbaquejoseluis@gmail.com"
            }

            // Primero, verifica si el empleado existe
            request.get(`empleados/${idEmpleado}`)
                .set("Aceptado", "application/json")
                .expect("Content-Type", /json/)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);

                    // Asegúrate de que el empleado exista antes de intentar actualizarlo
                    if (!res.body) {
                        return done(new Error('El empleado no existe'));
                    }

                    // Si el empleado existe, procede a actualizarlo
                    request.put(`empleados/${idEmpleado}`)
                        .send(empleado)
                        .set("Aceptado", "application/json")
                        .expect("Content-Type", /json/)
                        .expect(200)
                        .end((err) => {
                            if (err) return done(err);
                            done();
                        });
                });
        });
    });



    describe('GET - Verificar si el empleado existe por ID', () => {
        it('Debería devolver el código de estado 200 si el empleado existe', async () => {
            const idEmpleado = '6517f7b689521c0d3167b14f';
            request.get(`empleado/${idEmpleado}`)
                .expect('Content-Type', /json/)
                .expect(200);
        });

        it('Debería devolver el código de estado 404 si el empleado no existe', async () => {
            // Supongamos que intentamos eliminar un empleado con un ID que no existe
            const idEmpleadoNoExistente = '65176b08aa1866c80346e550';

            await request.get(`empleado/${idEmpleadoNoExistente}`)
                .set('Accept', 'application/json')
                .expect(404);
        });

    });

    describe('DELETE - Eliminar empleado por ID', () => {
        it('Debería devolver el código de estado 200 si el empleado se eliminó con éxito', (done) => {
            const idEmpleado = '651815756ddaa8a81c035e8d';

            request.delete(`empleado/${idEmpleado}`)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    done();
                });
        });

        it('Debería devolver el código de estado 404 si el empleado no existe', (done) => {
            // Supongamos que intentamos eliminar un empleado con un ID que no existe
            const idEmpleadoNoExistente = '65176b08aa1866c80346e550';

            request.delete(`empleado/${idEmpleadoNoExistente}`)
                .set('Accept', 'application/json')
                .expect(404)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    done();
                });
        });
    });

});