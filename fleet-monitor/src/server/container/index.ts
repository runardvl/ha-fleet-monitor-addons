import { env } from "../../config/env";

import { ApiClient } from "../../infrastructure/api-client";

import { SystemCollector } from "../collectors/system";
import { HeartbeatService } from "../services/heartbeat";

const collector = new SystemCollector();

const apiClient = new ApiClient(env.backendUrl);

export const heartbeatService = new HeartbeatService(collector, apiClient);
