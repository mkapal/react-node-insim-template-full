import "./env";

import { InSim } from "node-insim";
import { InSimFlags, IS_ISI_ReqI, PacketType } from "node-insim/packets";
import { StrictMode } from "react";
import { createRoot } from "react-node-insim";

import { log } from "@/log";

import { App } from "./App";

const inSim = new InSim();

inSim.connect({
  IName: "React InSim",
  ReqI: IS_ISI_ReqI.SEND_VERSION,
  Host: process.env.HOST ?? "127.0.0.1",
  Port: process.env.PORT ? parseInt(process.env.PORT) : 29999,
  Admin: process.env.ADMIN ?? "",
  Flags: InSimFlags.ISF_LOCAL,
});

const root = createRoot(inSim);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

inSim.on("connect", () => log("InSim connected"));
inSim.on("disconnect", () => log("InSim disconnected"));

inSim.on(PacketType.ISP_VER, (packet) => {
  log(`Connected to LFS ${packet.Product} ${packet.Version}`);
});

process.on("uncaughtException", (error) => {
  log(error);
  inSim.disconnect();
});
