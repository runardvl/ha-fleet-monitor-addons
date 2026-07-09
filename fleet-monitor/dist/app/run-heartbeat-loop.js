import { config } from "../config";
import { heartbeatService } from "../server/container";
export async function runHeartbeatLoop() {
    while (true) {
        try {
            const response = await heartbeatService.send(config.token);
            console.log("Heartbeat sent");
            console.dir(response, {
                depth: null,
            });
        }
        catch (error) {
            console.error("Heartbeat failed");
            console.error(error);
        }
        await new Promise((resolve) => {
            setTimeout(resolve, config.intervalSeconds * 1000);
        });
    }
}
