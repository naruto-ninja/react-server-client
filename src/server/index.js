import Koa from 'koa';
const app = new Koa();

const serve = require('koa-static'); 
const Router = require('koa-router');
const router = new Router();

import Home from '../containers/Home/index';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../Routes';

// 客户端渲染
// react代码在客户端渲染，消耗的是用户浏览器的性能
// 服务器端渲染
// react代码在服务器端渲染，消耗的是服务器端的性能

app.use(serve('public'));

router.get('/', function(ctx) {
  const content = renderToString((
    <StaticRouter location={ctx.path} context={{}}>
      {Routes}
    </StaticRouter>
  ));
  ctx.body = (`<html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id='root'>${content}</div>
    </body>
    <script src='/index.js'></script>
  </html>`);
});
app.use(router.routes())
const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example add listening at http://%s:%s', host, port);
})