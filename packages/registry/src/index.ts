import express from "express";
import cors from "cors";
import { packagesRouter } from "./routes/packages";
import { searchRouter } from "./routes/search";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", version: "0.1.0" });
});

app.use("/packages", packagesRouter);
app.use("/search", searchRouter);

app.listen(PORT, () => {
  console.log(`soropkg registry running on port ${PORT}`);
});

export default app;
