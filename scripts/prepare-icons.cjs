const fs = require("node:fs");
const path = require("node:path");

const iconDir = path.resolve(__dirname, "..", "electron", "icons");
const iconPngPath = path.join(iconDir, "icon.png");
const iconIcoPath = path.join(iconDir, "icon.ico");
const logoPngPath = path.resolve(__dirname, "..", "src", "assets", "img", "logo.png");
const logoIcoPath = path.resolve(__dirname, "..", "src", "assets", "img", "logo.ico");

const fallbackPngBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAAAsSAAALEgHS3X78AAAA40lEQVR4nO3YMQ6CQBBE0SPe/8qQkJg4kCPM6M1FDfQxj7Qj1NoUVdXU8TH2f9s7u8j4m4xH8f7d9vR7kQAAAAAAAAAAwBfX5bVhW3f3uXr6z0l4z8wQ8wz5k4jz8zQkH9Q6n0jJ8S5j8m6V7m8x0a2k7mTQ6g2m6lq4k0b0kRzK3V7XHjY4x3m7mP1z0u6w5r9Vj2M3c2g7x7T2nR7zJ8m1y6b7b+M5tGv2f2s8Y1d9kY7m9uVqv4q5m2f9mV8g2sQ3AAAAAAAAAAD8A8HqM2R9G4D2AAAAAElFTkSuQmCC";

if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir, { recursive: true });
}

if (fs.existsSync(logoPngPath)) {
  fs.copyFileSync(logoPngPath, iconPngPath);
  console.log("Copied src/assets/img/logo.png to electron/icons/icon.png");
} else if (!fs.existsSync(iconPngPath)) {
  fs.writeFileSync(iconPngPath, Buffer.from(fallbackPngBase64, "base64"));
  console.log("Created fallback app icon at electron/icons/icon.png");
}

async function ensureIco() {
  if (fs.existsSync(logoIcoPath)) {
    fs.copyFileSync(logoIcoPath, iconIcoPath);
    console.log("Copied src/assets/img/logo.ico to electron/icons/icon.ico");
    return;
  }

  try {
    const pngToIco = require("png-to-ico");
    const icoBuffer = await pngToIco(iconPngPath);
    fs.writeFileSync(iconIcoPath, icoBuffer);
    console.log("Generated electron/icons/icon.ico for Windows build");
  } catch (error) {
    if (!fs.existsSync(iconIcoPath)) {
      console.warn("Could not generate icon.ico. Install dependencies and rerun prepare:icons.");
    }
  }
}

ensureIco();
