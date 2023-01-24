const router = require("express").Router();
const {catchErrors} =  require("../handlers/errorHandlers");
const registerController = require("../controllers/registerController");

router.post("/challenge-register", catchErrors(registerController.register));

module.exports = router;