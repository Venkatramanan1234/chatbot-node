const router = require("express").Router();
const {catchErrors} =  require("../handlers/errorHandlers");
const conversationController = require("../controllers/conversationController");

router.post("/challenge-conversation", catchErrors(conversationController.conversation));

module.exports = router;