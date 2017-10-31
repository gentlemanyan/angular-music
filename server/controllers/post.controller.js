const Post = require('../models/post.model');


exports.load = function(params) {
  return Post.get(params.id);
};

exports.get = function(req, res) {
  return res.json(req.post);
};

exports.create = function(params) {
  const post = new Post({
    title: params.data.title,
    content: params.data.content
  });
  return post.save();
};

exports.update = function(params) {
  return load(params).then(post => {
    const tmp = post;
    post.title = params.data.title;
    post.content = params.data.content;
    return post.save()
  });
};

exports.list = function(params) {
  const { limit = 50, skip = 0 } = params;
  return Post.list({ limit, skip })
};

exports.remove = function(params) {
  return load(params).then(post => post.remove());
};