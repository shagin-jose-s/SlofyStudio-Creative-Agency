# Installation Guide
1. Install Node.js 18+ (LTS recommended).
2. Extract this ZIP.
3. Open the folder that directly contains `package.json` in VS Code.
4. Open Terminal in that folder.
5. Run `npm install`.
6. Run `npm run dev`.
7. Open the local URL shown by Vite.

## Build for production
Run `npm run build`. The optimized website is generated in `dist/`.

## Common issue
If npm reports `ENOENT package.json` or `Missing script: dev`, the terminal is in the wrong folder. Run `dir` and confirm `package.json` is visible in the current directory before running npm commands.
