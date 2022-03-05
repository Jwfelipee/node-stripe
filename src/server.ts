import express from "express";
import { Controller } from "./routes/ControllerExports";

export const server = express();

new Controller()
