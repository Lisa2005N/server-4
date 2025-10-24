// 自分で一から書いてみよう
import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';
const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

app.get('/api', async (c) => {
  const res = await fetch('https://randomuser.me/api/');
  // console.log('in the server side.');
  return c.json({ message: data });
});

Deno.serve(app.fetch);
