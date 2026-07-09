import { configService } from "../config/config.service";

import type { HeartbeatService } from "../server/services/heartbeat";

export class HeartbeatLoop {
  constructor(private readonly heartbeatService: HeartbeatService) {}

  async start() {
    while (true) {
      try {
        const response = await this.heartbeatService.send(configService.token);

        console.log("Heartbeat sent");
        console.dir(response, {
          depth: null,
        });
      } catch (error) {
        console.error("Heartbeat failed");
        console.error(error);
      }

      await this.sleep(configService.intervalSeconds * 1000);
    }
  }

  private sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
