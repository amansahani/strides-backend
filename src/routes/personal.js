// routes/personalDetails.js

import express from "express";
import {
  createPersonalDetails,
  getPersonalDetails,
} from "../controllers/personal.js";

const router = express.Router();

router.post("/", createPersonalDetails);
router.get("/:id", getPersonalDetails);


export default router;
