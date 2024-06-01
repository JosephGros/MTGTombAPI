import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = process.env.MongoURI || "";
    await connect(mongoURI);
    console.log("MongoDB Connected");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
