const initCollegeData = require("./dbinit/college.init");
const initEventData = require("./dbinit/event.init");
const initDonationData = require("./dbinit/donation.init");
const initUserData = require("./dbinit/user.init");
const initFeedData = require("./dbinit/feed.init");
const { connectToDb } = require("./utils/connectToDb");
const mongoose = require("mongoose");

async function initData() {
  await connectToDb();
  await initCollegeData();
  await initUserData();
  await initFeedData();
  await initEventData();
  await initDonationData();
  console.log("Initiated data successfully");
  mongoose.connection.close();
  console.log("Database connection closed.");
}

initData();
