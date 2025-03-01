import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence"; // Import the package

const AutoIncrement = mongooseSequence(mongoose); // Initialize with mongoose

const userSchema = new mongoose.Schema(
  {
    _id: Number, // Define _id as a Number since it's auto-incremented
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
      match: [/^[a-zA-Z ]+$/, "Name can only contain letters and spaces"],
    },
    Username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [30, "Username cannot exceed 30 characters"],
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      match: [
        /^[6789]\d{9}$/,
        "Phone number must start with 6, 7, 8, or 9 and be exactly 10 digits",
      ],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|in|us|uk)$/,
        "Please enter a valid email address with a proper domain (e.g., .com, .org, .net, etc.)",
      ],
    },
  },
  { versionKey: false, timestamps: true } // Auto add createdAt & updatedAt
);

// Apply auto-increment plugin for _id
userSchema.plugin(AutoIncrement, { inc_field: "_id" });

// Ensure strict schema enforcement
userSchema.set("strict", true);

const usersch = mongoose.model("user", userSchema);
export default usersch;
