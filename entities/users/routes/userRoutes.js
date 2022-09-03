const express = require("express");

const router = express.Router();

const loginGetController = require("../controllers/loginUserGETController");
const signupPostController= require("../controllers/signupPostController");
const signupGetController= require("../controllers/signupGetController");
const loginPOSTController= require("../controllers/loginPostController");
const logoutGETController= require("../controllers/logoutGETController");
const verifyGetController=  require("../controllers/verifyGetController");
const getPasswordController = require("../controllers/getPasswordController");
const passwordPOSTController = require("../controllers/passwordPOSTController");
const addToCartPOSTController = require("../controllers/addToCartPOSTController");
const cartGETController = require("../controllers/cartGETController");
const reduceCartPOSTController= require("../controllers/reduceCartPOSTController");
const deleteCartPOSTController = require("../controllers/deleteCartPOSTController");
const getEmailController = require("../controllers/getEmailController");
const  POSTEmailController = require("../controllers/POSTEmailController");
const getUpdatePasswordController =require("../controllers/getUpdatePasswordController");
const  PostUpdatePasswordController = require("../controllers/PostUpdatePasswordController");
const resendVerificationPOSTController = require("../controllers/resendVerificationPOSTController");

router.route("/login")
.get(loginGetController)
.post(loginPOSTController);


router.route("/signup")
.get(signupGetController)
.post(signupPostController);

router.route("/logout")
.get(logoutGETController);

router.route("/verify/:token")
.get(verifyGetController);


router.route("/password")
.get(getPasswordController)
.post(passwordPOSTController);


router.route("/forgetPassword")
.get(getEmailController)
.post(POSTEmailController);

router.route("/updatePassword/:token")
.get(getUpdatePasswordController)
.post(PostUpdatePasswordController);

router.route("/cart")
.get(cartGETController);


router.route("/addToCart")
.post(addToCartPOSTController);

router.route("/reduceCart")
.post(reduceCartPOSTController);

router.route("/resendVerification")
.post(resendVerificationPOSTController);





router.route("/deleteItem")
.post(deleteCartPOSTController);







module.exports = router;