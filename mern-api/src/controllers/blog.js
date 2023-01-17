const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
  
  const erros = validationResult(req);
  
  if (!erros.isEmpty()) {
    const err = new Error("input tidak sesuai");
    err.errorStatus = 400;
    err.data = erros.array();
    throw err;
  }

  if(!req.file) {
    const err = new Error("Image harus di upload");
    err.errorStatus = 400;
    err.data = erros.array();
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;
  
  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
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

exports.getAllBlogPost = (req, res, next) => {
  BlogPost.find()
  .then(result => {
    res.status(200).json({
      message: "Data blog post berhasil dipanggil",
      data: result
    })
  })
  .catch(err => {
    next(err);
  })
}