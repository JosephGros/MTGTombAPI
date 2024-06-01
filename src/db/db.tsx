import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string =
      "mongodb+srv://wileyjosephgros:adminAPI@mtgvaultapi.ipkvptw.mongodb.net/MTGTombAPI?retryWrites=true&w=majority&appName=MTGVaultAPI";
    await connect(mongoURI);
    console.log("MongoDB Connected");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
