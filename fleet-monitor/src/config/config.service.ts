import { config } from "./index";

export class ConfigService {
  get backendUrl() {
    return config.backendUrl;
  }

  get token() {
    return config.token;
  }

  get intervalSeconds() {
    return config.intervalSeconds;
  }
}

export const configService = new ConfigService();
