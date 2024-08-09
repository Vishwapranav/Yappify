const express = require("express");
const {
    registerUser,
    authUser,
    allUsers,
  } = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);   //get(api/user/) Get method to get all users that allows only if we are logged in. Protect middleware takes care of checking if user is logged and has jwt token or not.
router.route("/").post(registerUser);      //Signup   //post(api/user/) registerUser function is executed after this endpoint is called
router.post("/login", authUser);           //Login    //post(api/user/login) authUser function is executed after this endpoint is called

module.exports = router;