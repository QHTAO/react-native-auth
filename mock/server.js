const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
router.get("/", function (ctx, next) {
  ctx.body = {
    api: "v.01",
    data: [],
  };
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, function () {
  console.log("server is running at http://localhost:3000/");
});
