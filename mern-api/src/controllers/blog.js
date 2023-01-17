const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");
const fs = require("fs");
const path = require("path");
const { findByIdAndDelete } = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    const err = new Error("input tidak sesuai");
    err.errorStatus = 400;
    err.data = erros.array();
    throw err;
  }

  if (!req.file) {
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
      });
    })
    .catch(err => {
      next(err);
    });
};

exports.getBlogPostById = (req, res, next) => {
  const postId = req.params.postId;
  BlogPost.findById(postId)
    .then(result => {
      if (!result) {
        const error = new Error("Blog post tidak ditemukan");
        error.errorStatus = 404;
        throw error;
      }
      res.status(200).json({
        message: "Data berhasil dipanggil",
        data: result
      });
    })
    .catch(err => {
      next(err);
    });
};

exports.updateBlogPost = (req, res, next) => {
  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    const err = new Error("input tidak sesuai");
    err.errorStatus = 400;
    err.data = erros.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error("Image harus di upload");
    err.errorStatus = 400;
    err.data = erros.array();
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then(post => {
      if (!post) {
        const err = new Error("Blog post tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }
      post.title = title;
      post.body = body;
      post.image = image;

      return post.save();
    })
    .then(result => {
      res.status(200).json({
        message: "Update sukses",
        data: result
      });
    })
    .catch(err => {
      next(err);
    });
};

exports.deleteBlogPost = (req, res, next) => {
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then(post => {
      if (!post) {
        const err = new Error("Blog post tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }
      removeImage(post.image);
      return BlogPost.findByIdAndDelete(postId);
    })
    .then(result => {
      res.status(200).json({
        message: "Hapus blog post berhasil",
        data: result,
      });
    })
    .catch(err => {
      next(err);
    });
};

const removeImage = filePath => {
  console.log("filePath", filePath);
  console.log("dir:", __dirname);

  filePath = path.join(__dirname, "../..", filePath);
  fs.unlink(filePath, err => console.log(err));
};
