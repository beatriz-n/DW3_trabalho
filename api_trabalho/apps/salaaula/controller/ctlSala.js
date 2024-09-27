const mdlSalas = require("../model/mdlSala");

const getAllSalas = async (req, res) => {
  const registro = await mdlSalas.getAllSalas();
  res.json({ status: "ok", registro });
};

const getSalasByID = async (req, res) => {
  const { id } = req.params;
  const registro = await mdlSalas.getSalasByID(id);
  if (!registro) {
    return res.status(404).json({ status: "error", message: "Sala não encontrada" });
  }
  res.json({ status: "ok", registro });
};

const insertSalas = async (request, res) => {
  const salaREG = request.body;    
  const { msg, linhasAfetadas } = await mdlSalas.insertSalas(salaREG);    
  res.json({ status: msg, linhasAfetadas });
};

const updateSalas = async (req, res) => {
  const { id } = req.params;
  const salaREG = req.body;
  const { msg, linhasAfetadas } = await mdlSalas.updateSalas(id, salaREG);
  res.json({ status: msg, linhasAfetadas });
};

const deleteSalas = async (req, res) => {
  const { id } = req.params;
  const { msg, linhasAfetadas } = await mdlSalas.deleteSalas(id);
  res.json({ status: msg, linhasAfetadas });
};

module.exports = {
  getAllSalas,
  insertSalas,
  getSalasByID,
  updateSalas,
  deleteSalas,
};
