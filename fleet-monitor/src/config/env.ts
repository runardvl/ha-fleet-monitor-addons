const getEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing env variable: ${key}`);
  }

  return value;
};

export const loadEnvConfig = () => ({
  backendUrl: getEnv("BACKEND_URL"),
  token: getEnv("TOKEN"),
  intervalSeconds: Number(process.env.INTERVAL ?? 30),
});
