const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

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

  const Posting = new BlogPost({
    title: title,
    body: body,
    author: { uid: 1, name: "Taufik" }
  });

  Posting.save()
    .then(result => {
      res.status(201).json({
        message: "Create blog succes",
        data: result
      });
    })
    .catch(err => {
      console.log(err);
    });
};
