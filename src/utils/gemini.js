import { GoogleGenerativeAI } from "@google/generative-ai";
console.log(process.env.REACT_APP_GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
