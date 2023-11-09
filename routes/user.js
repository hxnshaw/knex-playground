const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.route("/").get(userController.getAll).post(userController.create);
router
  .route("/:id")
  .get(userController.getById)
  .put(userController.update)
  .delete(userController.delete);

module.exports = router;
