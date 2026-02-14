import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("walletDesktop", {
  version: "1.0.0"
});
