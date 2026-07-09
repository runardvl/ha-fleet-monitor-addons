import { container } from "./container";

export class Application {
  async start() {
    console.log("Fleet Monitor Add-on started");

    await container.heartbeatLoop.start();
  }
}

export const application = new Application();
