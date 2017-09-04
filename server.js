// const express = require("express");
const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");

const [node, file, port = "port=3000"] = process.argv;
const [someProp, p] = port.split("=");
const PORT = p;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = new Koa();
    const router = new Router();

    router.get("/components/:comp", async ctx => {
      const comp = ctx.params.comp;
      const actualPage = `/components/${comp}`;
      const queryParams = { comp: ctx.params.comp };
      await app.render(ctx.req, ctx.res, actualPage, queryParams);
    });

    router.get("*", async ctx => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });

    server.use(async (ctx, next) => {
      // Koa doesn't seems to set the default statusCode.
      // So, this middleware does that
      ctx.res.statusCode = 200;
      await next();
    });

    server.use(router.routes());

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://127.0.0.1:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
