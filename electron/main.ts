import { app, BrowserWindow, shell } from "electron";
import path from "node:path";

const isDev = Boolean(process.env.VITE_DEV_SERVER_URL);

function resolveAppIconPath() {
  if (isDev) {
    return path.join(app.getAppPath(), "src", "assets", "img", "logo.png");
  }
  return path.join(process.resourcesPath, "icon.png");
}

function createMainWindow() {
  const window = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1100,
    minHeight: 760,
    backgroundColor: "#020617",
    titleBarStyle: "hiddenInset",
    icon: resolveAppIconPath(),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // In development we load Vite directly, in production from built files.
  if (isDev && process.env.VITE_DEV_SERVER_URL) {
    window.loadURL(process.env.VITE_DEV_SERVER_URL);
    window.webContents.openDevTools({ mode: "detach" });
  } else {
    window.loadFile(path.join(__dirname, "..", "dist", "index.html"));
  }

  // Keep external links outside of Electron for security.
  window.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
