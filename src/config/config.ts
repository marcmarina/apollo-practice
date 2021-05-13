import "dotenv/config";

const isTest = process.env.NODE_ENV === "test";

const mongoURI = () =>
  isTest ? "mongodb://localhost/deporunners" : process.env.MONGODB_URI ?? "";

const appSecretKey = () =>
  isTest ? "secretKey" : process.env.APP_SECRET_KEY ?? "";

const apiToken = () => (isTest ? "apiToken" : process.env.API_TOKEN ?? "");

const port = () => process.env.PORT ?? 8080;

export default {
  apiToken,
  appSecretKey,
  mongoURI,
  port,
};
