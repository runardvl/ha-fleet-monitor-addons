import type { ISystemSnapshot } from "../collectors/system";
import type { IHeartbeatPayloadDto } from "../dto";

export function toHeartbeatPayload(
  snapshot: ISystemSnapshot,
  token: string,
): IHeartbeatPayloadDto {
  return {
    token,

    name: snapshot.hostname,

    cpu: snapshot.cpu.usage,

    memory: snapshot.memory.usage,

    disk: Math.max(...snapshot.disk.map((disk) => disk.usage)),

    uptime: Math.floor(snapshot.uptime),

    hostname: snapshot.hostname,

    os: snapshot.os,
    platform: snapshot.platform,
    kernel: snapshot.kernel,
    architecture: snapshot.architecture,
  };
}
