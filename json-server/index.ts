/* eslint-disable @typescript-eslint/no-misused-promises */
import fs from 'node:fs/promises';
import path from 'node:path';
import jsonServer from 'json-server';

const PORT = 8000;
const DB_PATH = path.resolve(__dirname, 'db.json');

const server = jsonServer.create();
const router = jsonServer.router(DB_PATH);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Simulation of delay
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

server.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const rawDb = await fs.readFile(DB_PATH, 'utf-8');
    const db = JSON.parse(rawDb);

    const user = db.users?.find(
      (user: any) => user.username === username && user.password === password
    );

    if (user) {
      return res.json(user);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server running at http://localhost:${PORT}`);
});
