import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json({
    message: "HireMe Liberia API Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});