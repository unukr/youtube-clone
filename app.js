import bodyParser from "body-parser";
import "core-js";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.set("view engine", "pug");
app.use(cookieParser()); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(bodyParser.json()); // Node.js body parsing middleware.
app.use(bodyParser.urlencoded({ extended: true })); // Node.js body parsing middleware.
app.use(morgan("dev")); // HTTP request logger middleware for node.js

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
