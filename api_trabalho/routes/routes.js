const express = require("express");
const routerApp = express.Router();
const appSalas = require("../apps/salaaula/controller/ctlSala");

routerApp.get("/getAllSalas", appSalas.getAllSalas);
routerApp.post("/insertSalas", appSalas.insertSalas);

module.exports = routerApp;