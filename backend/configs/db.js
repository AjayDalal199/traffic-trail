import mongoose from "mongoose";
import Table from "../models/Table.model.js";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb is connected:", conn.connection.host);
  } catch (error) {
    console.log("Error in Database Connection...", error.message);
  }
}

export async function insertDefaults() {
  const count = await Table.countDocuments();
  if (count === 0) {
    await Table.insertMany([
      {
        serialNum: 1,
        site: "pinterest.com",
        pr: 95,
        da: 94,
        pa: 54,
        ss: 7,
      },
      {
        serialNum: 2,
        site: "www.hatena.ne.jp",
        pr: 76,
        da: 94,
        pa: 76,
        ss: 14,
      },
      {
        serialNum: 3,
        site: "www.scoop.it",
        pr: 74,
        da: 92,
        pa: 75,
        ss: 5,
      },
      {
        serialNum: 4,
        site: "digg.com",
        pr: 81,
        da: 92,
        pa: 81,
        ss: 5,
      },
      {
        serialNum: 5,
        site: "www.reddit.com",
        pr: 90,
        da: 92,
        pa: 92,
        ss: 3,
      },
      {
        serialNum: 6,
        site: "marketmystique.com",
        pr: 70,
        da: 90,
        pa: 80,
        ss: 1,
      },
      {
        serialNum: 7,
        site: "flipboard.com",
        pr: 70,
        da: 91,
        pa: 74,
        ss: 8,
      },
      {
        serialNum: 8,
        site: "www.diigo.com",
        pr: 74,
        da: 90,
        pa: 76,
        ss: 2,
      },
      {
        serialNum: 9,
        site: "www.tumblr.com",
        pr: 100,
        da: 77,
        pa: 99,
        ss: 1,
      },
      {
        serialNum: 10,
        site: "www.metafilter.com",
        pr: 66,
        da: 87,
        pa: 61,
        ss: 1,
      },
      {
        serialNum: 11,
        site: "share.bizsugar.com",
        pr: 49,
        da: 53,
        pa: 51,
        ss: 7,
      },
      {
        serialNum: 12,
        site: "www.bibsonomy.org",
        pr: 61,
        da: 56,
        pa: 58,
        ss: 4,
      },
      {
        serialNum: 13,
        site: "www.designfloat.com",
        pr: 59,
        da: 50,
        pa: 59,
        ss: 1,
      },
      {
        serialNum: 14,
        site: "public.bookmax.net",
        pr: 46,
        da: 43,
        pa: 47,
        ss: 0,
      },
      {
        serialNum: 15,
        site: "www.pusha.se",
        pr: 57,
        da: 49,
        pa: 53,
        ss: 3,
      },
    ]);
    console.log("Default table data inserted");
  } else {
    console.log("Default data is already present");
  }
}
