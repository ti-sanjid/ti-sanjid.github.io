import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

const BLOCKED_PATHS = new Set([
  '/server.js',
  '/package.json',
  '/package-lock.json',
  '/metadata.json',
]);

app.use((req, res, next) => {
  const normalizedPath = decodeURIComponent(req.path).toLowerCase();
  if (
    BLOCKED_PATHS.has(normalizedPath) ||
    normalizedPath.startsWith('/node_modules') ||
    normalizedPath.split('/').some((segment) => segment.startsWith('.'))
  ) {
    return res.status(404).send('Not Found');
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname, { index: 'index.html' }));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
