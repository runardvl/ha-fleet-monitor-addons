export function toHeartbeatPayload(snapshot, token) {
    return {
        token,
        name: snapshot.hostname,
        cpu: snapshot.cpu.usage,
        memory: snapshot.memory.usage,
        disk: Math.max(...snapshot.disk.map((disk) => disk.usage)),
        uptime: snapshot.uptime,
        hostname: snapshot.hostname,
        os: snapshot.os,
        platform: snapshot.platform,
        kernel: snapshot.kernel,
        architecture: snapshot.architecture,
    };
}
