const mdlSalas = require("../model/mdlSala");

const getAllSalas = async (req, res) => {
  const registro = await mdlSalas.getAllSalas();
  res.json({ status: "ok", registro });
};

const insertSalas = async (request, res) => {
  const salaREG = request.body;    
  const { msg, linhasAfetadas } = await mdlSalas.insertSalas(salaREG);    
  res.json({ status: msg, linhasAfetadas });
};

module.exports = {
  getAllSalas,
  insertSalas,
};
