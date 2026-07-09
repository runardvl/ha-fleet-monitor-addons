export interface ISystemSnapshot {
  hostname: string;
  uptime: number;
  os: string;
  platform: string;
  kernel: string;
  architecture: string;

  cpu: {
    usage: number;
  };

  memory: {
    total: number;
    used: number;
    free: number;
    usage: number;
  };

  disk: {
    filesystem: string;
    mount: string;
    size: number;
    used: number;
    usage: number;
  }[];
}
