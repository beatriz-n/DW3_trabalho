const express = require("express");
const routerApp = express.Router();
const appSalas = require("../apps/salaaula/controller/ctlSala");

routerApp.get("/getAllSalas", appSalas.getAllSalas);
routerApp.post("/insertSalas", appSalas.insertSalas);
routerApp.get("/getSalasByID/:id", appSalas.getSalasByID);
routerApp.put("/updateSalas/:id", appSalas.updateSalas);
routerApp.delete("/deleteSalas/:id", appSalas.deleteSalas);

module.exports = routerApp;