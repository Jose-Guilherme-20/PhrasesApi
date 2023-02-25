const express = require("express");
const apiController = require("../controllers/api.controller");
const router = express.Router();

router.get("/ping", apiController.ping);
router.get("/random", apiController.random);
router.get("/nome/:nome", apiController.nome);

router.post("/phrase", apiController.createPhrase);
router.get("/phrases", apiController.listAllPhrases);
router.get("/phrase/aleatoria", apiController.randomPhrase);
router.get("/phrase/:id", apiController.listOnePhrase);
router.put("/phrase/:id", apiController.updatePhrase);
router.delete("/phrase/:id", apiController.deletePhrase);

module.exports = router;
