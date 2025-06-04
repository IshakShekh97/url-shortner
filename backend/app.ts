// Basic Imports
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./src/config/mongo.config";

// ShortUrl Imports
import ShortUrlRoutes from "./src/routes/shorturl.route";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create", ShortUrlRoutes);

app.listen(process.env.APP_PORT, () => {
  connectToDB();
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});
