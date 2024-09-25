const db = require("../../../database/databaseconfig");

const getAllSalas = async () => {
  return (await db.query("SELECT * FROM salasdeaula")).rows;
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
  

module.exports = {
  getAllSalas,
  insertSalas,
};
