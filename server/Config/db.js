const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("successfully connected to the db..."))
    .catch((err) => console.log(err))