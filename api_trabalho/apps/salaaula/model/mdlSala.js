const db = require("../../../database/databaseconfig");

const getAllSalas = async () => {
  return (await db.query("SELECT * FROM salasdeaula WHERE removido = false")).rows;
};

const insertSalas = async (salaREG) => {
  const result = await db.query(
    "INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) VALUES ($1, $2, $3, $4) RETURNING *",
    [salaREG.descricao, salaREG.localizacao, salaREG.capacidade, salaREG.removido]
  );

  return {
    msg: "Sala inserida com sucesso",
    linhasAfetadas: result.rowCount,
  };
};

const getSalasByID = async (id) => {
  const result = await db.query("SELECT * FROM salasdeaula WHERE salasdeaulaid = $1 AND removido = false", [id]);
  return result.rows[0];
};

const updateSalas = async (id, salaREG) => {
  const result = await db.query(
    "UPDATE salasdeaula SET descricao = $1, localizacao = $2, capacidade = $3 WHERE salasdeaulaid = $4 AND removido = false RETURNING *",
    [salaREG.descricao, salaREG.localizacao, salaREG.capacidade, id]
  );

  return {
    msg: result.rowCount > 0 ? "Sala atualizada com sucesso" : "Sala não encontrada",
    linhasAfetadas: result.rowCount,
  };
};

const deleteSalas = async (id) => {
  const result = await db.query("UPDATE salasdeaula SET removido = true WHERE salasdeaulaid = $1 RETURNING *", [id]);

  return {
    msg: result.rowCount > 0 ? "Sala removida com sucesso" : "Sala não encontrada",
    linhasAfetadas: result.rowCount,
  };
};

module.exports = {
  getAllSalas,
  insertSalas,
  getSalasByID,
  updateSalas,
  deleteSalas,
};
