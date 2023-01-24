const router = require("express").Router();
const {catchErrors} =  require("../handlers/errorHandlers");
const getBehaviourController = require("../controllers/getBehaviourController");

router.get("/challenge-behaviour", catchErrors(getBehaviourController.register));

module.exports = router;