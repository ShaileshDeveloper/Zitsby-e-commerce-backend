const mongoose = require("mongoose");
const mySecret = process.env['MONGO_URL']
const dbconnection = async () => {
  try {
    const connection = await mongoose.connect(`${mySecret}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("succesful");
  } catch (err) {
    console.log(err, "error");
  }
};

module.exports = dbconnection;