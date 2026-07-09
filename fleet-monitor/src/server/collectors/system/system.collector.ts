import os from "node:os";
import si from "systeminformation";

import { ISystemSnapshot } from "./system.types";

export class SystemCollector {
  async collect(): Promise<ISystemSnapshot> {
    const [cpu, memory, disk, time, osInfo] = await Promise.all([
      si.currentLoad(),
      si.mem(),
      si.fsSize(),
      si.time(),
      si.osInfo(),
    ]);

    return {
      hostname: os.hostname(),

      os: osInfo.distro,
      platform: osInfo.platform,
      kernel: osInfo.kernel,
      architecture: osInfo.arch,

      uptime: time.uptime,

      cpu: {
        usage: cpu.currentLoad,
      },

      memory: {
        total: memory.total,
        used: memory.used,
        free: memory.available,
        usage: (memory.used / memory.total) * 100,
      },

      disk: disk.map((item) => ({
        filesystem: item.fs,
        mount: item.mount,
        size: item.size,
        used: item.used,
        usage: item.use,
      })),
    };
  }
}
