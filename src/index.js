// app.js

import express from "express";
import cookieParser from "cookie-parser";
import personalDetailsRouter from "./routes/personal.js";
import academicDetailsRouter from "./routes/academic.js";
import documentsRouter from "./routes/documents.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://strides-registration.vercel.app/",
    ], // Replace with the actual origin of your client app
    credentials: true,
  })
);
// Personal Details Routes
app.use("/personal-details", personalDetailsRouter);

// Academic Details Routes
app.use("/academic-details", academicDetailsRouter);

// Documents Routes
app.use("/documents", documentsRouter);

app.get("/", (req, res) => {
  const id = req.cookies;
  res.send(id);
  console.log(id);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
