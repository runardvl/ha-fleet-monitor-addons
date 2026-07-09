export class ApiClient {
  constructor(private readonly baseUrl: string) {}

  async sendHeartbeat(payload: unknown) {
    console.log("Heartbeat payload");

    console.dir(payload, {
      depth: null,
    });

    const response = await fetch(`${this.baseUrl}/api/heartbeat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = await response.text();

      throw new Error(`Heartbeat failed (${response.status}): ${body}`);
    }

    return response.json();
  }
}
