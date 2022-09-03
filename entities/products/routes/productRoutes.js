const express = require("express");
const router = express.Router();


const productGETController = require("../controllers/productGETController");

router.route("/")
.post(productGETController)


module.exports = router;