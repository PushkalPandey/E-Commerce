const homeRoutes = require("./home/routes/homeRoutes");
const userRoutes = require("./users/routes/userRoutes");
const productRoutes = require("./products/routes/productRoutes");

module.exports =  function initRoutes(app)
{
  app.use("/", homeRoutes);
  app.use("/user", userRoutes);
  app.use("/product", productRoutes);

}