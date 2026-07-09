import { configService } from "../../config/config.service";

import { ApiClient } from "../../infrastructure/api-client";

import { SystemCollector } from "../../server/collectors/system";
import { HeartbeatService } from "../../server/services/heartbeat";

import { HeartbeatLoop } from "../heartbeat-loop";

export class ApplicationContainer {
  readonly apiClient: ApiClient;

  readonly systemCollector: SystemCollector;

  readonly heartbeatService: HeartbeatService;

  readonly heartbeatLoop: HeartbeatLoop;

  constructor() {
    this.apiClient = new ApiClient(configService.backendUrl);

    this.systemCollector = new SystemCollector();

    this.heartbeatService = new HeartbeatService(
      this.systemCollector,
      this.apiClient,
    );

    this.heartbeatLoop = new HeartbeatLoop(this.heartbeatService);
  }
}
