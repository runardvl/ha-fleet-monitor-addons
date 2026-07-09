import "dotenv/config";
import { runHeartbeatLoop } from "./run-heartbeat-loop";
console.log("Fleet Monitor Add-on started");
await runHeartbeatLoop();
