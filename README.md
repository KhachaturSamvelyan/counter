# Counterwallet Desktop UI

Modern desktop crypto wallet UI mock built with Electron, React, Tailwind, Zustand, React Router, and Framer Motion.

## Scripts

- `npm run dev` - run Vite + Electron in development
- `npm run build` - build renderer and Electron main/preload bundles
- `npm run dist` - package desktop app via electron-builder
- `npm run dist:mac` - build macOS (`dmg` + `zip`) universal bundle
- `npm run dist:mac:x64` - build macOS Intel-only package
- `npm run dist:mac:arm64` - build macOS Apple Silicon-only package

## Build targets

- macOS: `.dmg`
- Windows: `.exe` (NSIS)
- Linux: `.AppImage`

## Notes

- This project contains UI-only wallet flows and mock data, with no real blockchain logic.
- App action buttons intentionally show a global **System Notice** modal.
- For macOS packaging, run mac builds on macOS (or macOS CI) to avoid cross-platform signing/tooling limitations.
