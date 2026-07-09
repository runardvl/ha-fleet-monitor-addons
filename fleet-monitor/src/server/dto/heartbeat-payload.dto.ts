export interface IHeartbeatPayloadDto {
  token: string;

  name: string;

  cpu: number;
  memory: number;
  disk: number;
  uptime: number;

  hostname: string;

  os: string;
  platform: string;
  kernel: string;
  architecture: string;
}
