const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//Load environment variables
dotenv.config();


// Connect to database
connectDB();

const app = express();

// Init Middleware
app.use(express.json());

app.get("/", (request, response) => {
  response.send("API Running.....");
});

//Routes
const userRoutes = require("./routes/userRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

app.use("/api/users", userRoutes);
app.use("/api/resumes", resumeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});