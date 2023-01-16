exports.createProduct = (req, res, next) => {
  const name = req.body.name; // agar menjadi dinamis
  const price = req.body.price; // agar menjadi dinamis
  res.json({
    message: "Create Product Succes!!!",
    data: {
      id: 1,
      name: name,
      price: price
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
