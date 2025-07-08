import http from "http";
import app from "./app.js";
import { connectDB, insertDefaults } from "./configs/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const server = http.createServer(app);

await connectDB();
await insertDefaults();

server.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
