import { ApiClient } from "../../../infrastructure/api-client";
import { SystemCollector } from "../../collectors/system";
import { toHeartbeatPayload } from "../../mappers";

export class HeartbeatService {
  constructor(
    private readonly collector: SystemCollector,
    private readonly apiClient: ApiClient,
  ) {}

  async send(token: string) {
    const snapshot = await this.collector.collect();

    const payload = toHeartbeatPayload(snapshot, token);

    return this.apiClient.sendHeartbeat(payload);
  }
}
