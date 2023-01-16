const { validationResult } = require("express-validator");

exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  // const image = req.body.image
  const body = req.body.body;

  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    const err = new Error("input tidak sesuai");
    err.errorStatus = 400;
    err.data = erros.array();
    throw err;
  }

  const result = {
    message: "Create blog succes",
    data: {
      post_id: 1,
      title: title,
      // image: "imagefile.png",
      body: body,
      created_at: "09/09/09",
      author: {
        uid: 1,
        name: "testing"
      }
    }
  };
  res.status(201).json(result);
};
