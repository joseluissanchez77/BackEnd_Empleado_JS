const EmpleadoModel = require("../models/Empleado");
 
exports.getAllEmpleados = async () => {
  return await EmpleadoModel.find();
};
 
exports.createEmpleado = async (empleado) => {
  return await EmpleadoModel.create(empleado);
};
exports.getEmpleadoById = async (id) => {
  return await EmpleadoModel.findById(id);
};
 
exports.updateEmpleado = async (id, empleado) => {
  return await EmpleadoModel.findByIdAndUpdate(id, empleado);
};
 
exports.deleteEmpleado = async (id) => {
  return await EmpleadoModel.findByIdAndDelete(id);
};