import fs from "node:fs";
const OPTIONS_PATH = "/data/options.json";
export function loadAddonConfig() {
    if (!fs.existsSync(OPTIONS_PATH)) {
        return null;
    }
    const options = JSON.parse(fs.readFileSync(OPTIONS_PATH, "utf8"));
    if (!options.backend_url ||
        !options.token ||
        typeof options.interval !== "number") {
        return null;
    }
    return {
        backendUrl: options.backend_url,
        token: options.token,
        intervalSeconds: options.interval,
    };
}
