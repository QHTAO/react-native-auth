const koa = require("koa");
const bodyparser = require("koa-bodyparser");
const app = new koa();

const router = require("koa-router")();
router.get("/", function (ctx, next) {
  ctx.body = {};
});

router.post("/auth/local", async (ctx) => {
  ctx.body = {
    data: {
      token: "saf3agfdsagfre#$agfdsag63gfre#$^&436gfh",
    },
  };
});
app.use(bodyparser());
app.use(router.routes(), router.allowedMethods());

app.listen(3000, function () {
  console.log("server is running at http://localhost:3000/");
});
