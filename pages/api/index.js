import fs from "fs";
import path from "path";

const filepath = path.join(process.cwd(), "data.json");
export default function handler(req, res) {
  if (req.method === "GET") {
    let fileData = fs.readFileSync(filepath);
    res.status(200).json(JSON.parse(fileData));
  } else if (req.method === "POST") {
    const userData = JSON.parse(req.body);
    let fileData = fs.readFileSync(filepath);
    fileData = JSON.parse(fileData);
    fileData.push(userData);
    console.log(fileData);
    fs.writeFileSync(filepath, JSON.stringify(fileData));
    res.status(200).json(fileData)
  }
}
