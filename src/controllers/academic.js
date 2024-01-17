// controllers/academicDetailsController.js

import { prisma } from "../db/index.js";

export const createAcademicDetails = async (req, res) => {
  try {
    const personalDetailsId = Number.parseInt(req.cookies.personalDetailsId);

    const academicDetails = await prisma.academicDetails.create({
      data: {
        ...req.body,
        personalDetails: { connect: { id: personalDetailsId } },
      },
    });

    res.status(201).json(academicDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAcademicDetails = async (req, res) => {
  try {
    const personalDetailsId = req.cookies.personalDetailsId;

    const academicDetails = await prisma.document.findMany({
      where: { personalDetailsId: parseInt(personalDetailsId) },
    });

    res.status(200).json(academicDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
