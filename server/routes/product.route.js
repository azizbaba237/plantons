const router = require("express").Router();

// import controllers from product controllers
const {
  allProduct,
  plantId,
  addProduct,
  updatePlant,
  deletePlant,
} = require("../controllers/product.controller");

// import upload
const upload = require("../middleware/upload");

// different route
router.get("/", allProduct); //Get all plant
router.get("/:id", plantId); // Get plant by id
router.post("/", upload.single("avatar"), addProduct); // Add a new plant
router.put("/:id", updatePlant); // Update plant
router.delete("/:id", deletePlant); // Delete plant

module.exports = router;
