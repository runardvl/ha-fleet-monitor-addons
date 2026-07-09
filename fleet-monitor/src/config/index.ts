import { env } from "./env";
import { loadAddonConfig } from "./addon-config";

export const config = loadAddonConfig() ?? env;
