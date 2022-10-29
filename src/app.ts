import express, { Request, Response, NextFunction } from "express";
import todoRoute from "./Routes/todos";

const app = express();
app.use(express.json());

// Routes
app.use("/api/todos", todoRoute);

// Error Handling

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
