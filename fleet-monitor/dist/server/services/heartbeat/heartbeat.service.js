import { toHeartbeatPayload } from "../../mappers";
export class HeartbeatService {
    collector;
    apiClient;
    constructor(collector, apiClient) {
        this.collector = collector;
        this.apiClient = apiClient;
    }
    async send(token) {
        const snapshot = await this.collector.collect();
        const payload = toHeartbeatPayload(snapshot, token);
        return this.apiClient.sendHeartbeat(payload);
    }
}
