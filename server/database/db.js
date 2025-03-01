import mongoose from "mongoose";
const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.peb3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(URL);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("error while connecting DB", error);
  }
};
export default Connection;
