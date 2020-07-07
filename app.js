import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(cookieParser()); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(bodyParser.json()); // Node.js body parsing middleware.
app.use(bodyParser.urlencoded({ extended: true })); // Node.js body parsing middleware.
app.use(morgan("dev")); // HTTP request logger middleware for node.js
app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
