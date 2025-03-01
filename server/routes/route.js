import express from "express";
import usersch from "../Schema/userschema.js";
const router = express.Router();
router.post("/add", async (req, res) => {
  console.log(req.body);
  const newuser = new usersch(req.body);
  try {
    await newuser.save();
    res.status(201).json(newuser);
  } catch (error) {
    console.log("Error Name:", error.name);
    if (error.name === "ValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Something went wrong" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await usersch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // ✅ Apply validation
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error Name:", error.name);
    if (error.name === "ValidationError") {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const users = await usersch.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    //const user = await usersch.findOne({ _id: req.params.id });
    const user = await usersch.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    console.log("Deleting User with ID:", req.params.id);

    // Find and delete the user by ID
    const user = await usersch.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" }); // ✅ Handle missing user
    }

    res.status(200).json({ message: "User deleted successfully", user }); // ✅ Return success message
  } catch (error) {
    console.error("Error deleting user:", error);

    // Handle invalid ObjectId error
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
