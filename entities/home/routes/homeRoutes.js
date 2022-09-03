const express = require("express");
const router = express.Router();

const getHomePageController = require("../controllers/getHomePageController");
const postLoadMoreController = require("../controllers/postLoadMoreController")


router.route("/")
.get(getHomePageController)

router.route("/loadMore")
.post(postLoadMoreController)

module.exports = router;
