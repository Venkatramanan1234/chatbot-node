const router = require("express").Router();
const {catchErrors} =  require("../handlers/errorHandlers");
const postBehaviourController = require("../controllers/postBehaviourController");

router.post("/challenge-behaviour", catchErrors(postBehaviourController.register));

module.exports = router;