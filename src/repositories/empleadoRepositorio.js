const EmpleadoModel = require("../models/Empleado");
 
exports.getAllEmpleados = async () => {
  return await EmpleadoModel.find();
};
 
exports.createEmpleado = async (blog) => {
  return await EmpleadoModel.create(blog);
};
exports.getEmpleadoById = async (id) => {
  return await EmpleadoModel.findById(id);
};
 
exports.updateEmpleado = async (id, blog) => {
  return await EmpleadoModel.findByIdAndUpdate(id, blog);
};
 
exports.deleteEmpleado = async (id) => {
  return await EmpleadoModel.findByIdAndDelete(id);
};