// routes/documents.js

import express from "express";
import { createDocument } from "../controllers/documents.js";

const router = express.Router();

router.post("/", createDocument);
//router.get("/:id", getDocuments);

export default router;
