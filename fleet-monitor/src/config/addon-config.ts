import fs from "node:fs";

import type { IConfig } from "./config.types";

const OPTIONS_PATH = "/data/options.json";

interface IAddonOptions {
  backend_url: string;
  token: string;
  interval: number;
}

export function loadAddonConfig(): IConfig | null {
  if (!fs.existsSync(OPTIONS_PATH)) {
    return null;
  }

  const options = JSON.parse(
    fs.readFileSync(OPTIONS_PATH, "utf8"),
  ) as IAddonOptions;

  if (
    !options.backend_url ||
    !options.token ||
    typeof options.interval !== "number"
  ) {
    return null;
  }

  return {
    backendUrl: options.backend_url,
    token: options.token,
    intervalSeconds: options.interval,
  };
}
