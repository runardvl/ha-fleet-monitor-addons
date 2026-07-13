import { loadAddonConfig } from "./addon-config";
import { loadEnvConfig } from "./env";

const addonConfig = loadAddonConfig();

export const config = addonConfig ?? loadEnvConfig();
