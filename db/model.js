import mongoose from "mongoose";

// Mongoose schema for AcademicDetails
const AcademicDetailsSchema = new mongoose.Schema({
  tenthSchool: String,
  examBoard10th: String,
  passingYear10th: String,
  percentage10th: String,
  rollNo10th: String,
  twelfthSchool: String,
  examBoard12th: String,
  passingYear12th: String,
  percentage12th: String,
  rollNo12th: String,
  stream12th: String,
});

const DocumentSchema = new mongoose.Schema({
  name: String,
  contentType: String,
  data: Buffer,
});

export const AcademicDetailsModel = mongoose.model(
  "AcademicDetails",
  AcademicDetailsSchema
);
export const DocumentModel = mongoose.model("Document", DocumentSchema);

// Mongoose schema for PersonalDetails with AcademicDetails embedded
const PersonalDetailsSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: { type: String, unique: true },
  mobileNumber: String,
  fatherName: String,
  motherName: String,
  parentsIncome: String,
  address: {
    flatPlotNo: String,
    area: String,
    city: String,
    state: String,
    pincode: String,
  },
  academicDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AcademicDetails",
  },
  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
});
export const PersonalDetailsModel = mongoose.model(
  "PersonalDetails",
  PersonalDetailsSchema
);
