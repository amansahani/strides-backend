// controllers/personalDetailsController.js

import { prisma } from "../db/index.js";

export const createPersonalDetails = async (req, res) => {
  try {
    console.log("Body", req.body);
    const body = req.body;
    const personalDetails = await prisma.personalDetails.create({
      data: body,
    });

    res.cookie("personalDetailsId", personalDetails.id, { httpOnly: true });

    res.status(201).json(personalDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPersonalDetails = async (req, res) => {
  try {
    const id = req.cookies.personalDetailsId;
    const personalDetails = await prisma.personalDetails.findUnique({
      where: { id: parseInt(id) },
      include: { academicDetails: true, documents: true },
    });

    if (!personalDetails) {
      return res.status(404).json({ error: "Personal details not found" });
    }

    res.status(200).json(personalDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
