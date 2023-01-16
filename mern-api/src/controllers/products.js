exports.createProduct = (req, res, next) => {
  res.json({
    message: "Create Product Succes!!!",
    data: {
      id: 1,
      name: "Roti",
      price: 5000
    }
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "Get All Product Succes",
    data: [
      {
        id: 2,
        name: "Mie Indomie",
        price: 10000
      }
    ]
  });
  next();
};
