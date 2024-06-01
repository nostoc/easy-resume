// controllers/resumeController.js
const asyncHandler = require("express-async-handler");
const Resume = require("../models/Resume");

// Create a new resume
const createResume = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    objective,
    education,
    experience,
    skills,
  } = req.body;

  const resume = new Resume({
    user: req.user._id,
    name,
    email,
    phone,
    address,
    objective,
    education,
    experience,
    skills,
  });

  const createdResume = await resume.save();
  res.status(201).json(createdResume);
});

// Get all resumes by user ID
const getResumes = asyncHandler(async (req, res) => {
  const resumes = await Resume.find({ user: req.user._id });
  res.json(resumes);
});

// Get resume by ID
const getResumeById = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  if (resume) {
    res.json(resume);
  } else {
    res.status(404);
    throw new Error("Resume not found");
  }
});

// Update resume by ID
const updateResume = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    objective,
    education,
    experience,
    skills,
  } = req.body;

  const resume = await Resume.findById(req.params.id);

  if (resume) {
    resume.name = name || resume.name;
    resume.email = email || resume.email;
    resume.phone = phone || resume.phone;
    resume.address = address || resume.address;
    resume.objective = objective || resume.objective;
    resume.education = education || resume.education;
    resume.experience = experience || resume.experience;
    resume.skills = skills || resume.skills;

    const updatedResume = await resume.save();
    res.json(updatedResume);
  } else {
    res.status(404);
    throw new Error("Resume not found");
  }
});

// Delete resume by ID
const deleteResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  if (resume) {
    await resume.remove();
    res.json({ message: "Resume removed" });
  } else {
    res.status(404);
    throw new Error("Resume not found");
  }
});

module.exports = {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
};
