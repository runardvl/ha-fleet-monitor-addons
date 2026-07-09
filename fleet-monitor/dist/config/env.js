const getEnv = (key) => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing env variable: ${key}`);
    }
    return value;
};
export const env = {
    backendUrl: getEnv("BACKEND_URL") ?? "http://localhost:3000",
    token: getEnv("TOKEN"),
    intervalSeconds: Number(process.env.INTERVAL ?? 30),
};
