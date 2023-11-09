const db = require("../config/db");

module.exports = blogService = {
  getAll: async () => {
    const blogs = await db("blog")
      .join("users", "users.id", "blog.author")
      .select("blog.*", "users.name", "users.email");
    return blogs;
  },
  getById: async (id) => {
    const blog = await db("blog").where({ id });
    return blog;
  },
  create: async (blog) => {
    const blogs = await db("blogs").insert(blog);
    return blogs;
  },
  update: async (id, blog) => {
    const blogs = await db("blog").where("id", id).update({
      title: blog.title,
      content: blog.content,
    });
    return blogs;
  },
  delete: async (id) => {
    const blogs = await db("blogs").where("id", id).del();
    return blogs;
  },
};
