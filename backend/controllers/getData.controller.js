import Table from "../models/Table.model.js";

async function getData(req, res) {
  try {
    const data = await Table.find().sort({ serialNum: 1 });
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
}

export default getData;
