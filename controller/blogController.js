const blogService = require("../service/blogService");
module.exports = blogController = {
  getAll: async (req, res, next) => {
    try {
      const blogs = await blogService.getAll();
      res.json(blogs);
    } catch (error) {
      next(error);
    }
  },
  getById: async (req, res, next) => {
    try {
      const blogs = await blogService.getById(req.params.id);
      res.json(blogs);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const blog = await blogService.create(req.body);
      res.json(blog);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const blog = await blogService.update(req.params.id, req.body);
      res.json(blog);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const blog = await blogService.delete(req.params.id);
      res.json(blog);
    } catch (error) {
      next(error);
    }
  },
};
