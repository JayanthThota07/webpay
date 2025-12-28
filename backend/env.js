import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env");
console.log("DOTENV PATH =", envPath);

dotenv.config({ path: envPath });

console.log("MONGO_URI VALUE =", process.env.MONGO_URI);
