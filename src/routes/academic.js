// routes/academicDetails.js

import express from "express";
import {
  createAcademicDetails,
  getAcademicDetails,
} from "../controllers/academic.js";

const router = express.Router();

router.post("/", createAcademicDetails);
router.get("/:id", getAcademicDetails);

export default router;
