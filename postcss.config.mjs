const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
export default { plugins: {
  '@tailwindcss/postcss': {},
  [path.resolve('scripts/postcss-paths.cjs')]: { basePath },
}};
import path from 'node:path';
