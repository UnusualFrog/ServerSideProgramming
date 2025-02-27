const express = require("express");
const bergRouter = express.Router ();

const {getBergs, bergSplit, createBurg, deleteAllBergs} =
    require ("../controllers/berg.controller.js");

    bergRouter.get('/', getBergs)
    bergRouter.post('/', createBurg);
    bergRouter.put ('/bergId=:bergId', bergSplit);
    bergRouter.delete('/', deleteAllBergs)


module.exports = bergRouter;