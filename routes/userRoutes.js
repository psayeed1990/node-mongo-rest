const express = require("express");
const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
