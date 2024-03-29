const router = require("express").Router();
const storiesModel = require("./stories-model");

router.get("/", (req, res) => {
    const { sortby, sortdir } = req.query;
  storiesModel
    .find()
    .orderBy(sortby || "rank", sortdir || "asc")
    .then(topArticles => {
      res.status(200).json(topArticles);
      console.log("madeit");
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Cannot retrieve articles from database", error });
    });
});

module.exports = router;
