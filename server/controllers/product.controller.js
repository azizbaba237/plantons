// import the model
const productModel = require("../models/product.model");

// to Read all product in database
module.exports.allProduct = async (req, res) => {
  const allProduct = await productModel.find();
  res.status(200).send({
    allProduct,
  });
};

// Read product by id
module.exports.plantId = async (req, res) => {
  const plantId = req.params.id;
  const plantsId = await productModel.findById(plantId);
  res.status(200).send({
    plantsId,
  });
};

// to add product in database
module.exports.addProduct = async (req, res) => {
  try {
    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
    };

    if (req.file) {
      newProduct.avatar = "uploads/" + req.file.filename;
    }

    const product = new productModel(newProduct);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

// to update data
module.exports.updatePlant = async (req, res) => {
  const plantId = req.params.id;
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const category = req.body.category;
  await productModel.findByIdAndUpdate(plantId, {
    name: name,
    price: price,
    description: description,
    category: category,
  });
  const plantsId = await productModel.find();
  res.status(200).send({
    plantsId,
  });
};

// to delete data
module.exports.deletePlant = async (req, res) => {
  const plantId = req.params.id;
  await productModel.findByIdAndDelete(plantId);
  res.send({
    status: "Record deleted successfully",
  });
};
