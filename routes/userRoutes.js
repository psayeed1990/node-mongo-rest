const express = require("express");
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
