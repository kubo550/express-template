import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import type { Request, Response } from "express";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({
  path: path.join(
    path.resolve(),
    process.env.NODE_ENV === "test" ? `.env.test` : ".env"
  ),
});

// Create Express server
const app = express();

// parse incoming requests with JSON payloads.
app.use(express.json());

// HTTP request logger middleware for node.js
app.use(morgan("dev"));

// helmet helps you secure your Express apps by setting various HTTP headers.
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: false,
    hidePoweredBy: false,
    hsts: false,
    ieNoOpen: false,
    noSniff: false,
    xssFilter: false,
  })
);

// CORS middleware to allow cross-origin requests and responses in Express apps.
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "../public")));

// health-check endpoint
app.get("/health", (req: Request, res: Response) => {
  return res.sendStatus(200);
});

// Render index.html page from public folder
app.get("/home", (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, "../public/index.html"));
});

//export the server
export default app;

// don't run the server when running tests
if (process.env.stage !== "test") {
  const port = process.env.port || 3000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
}
