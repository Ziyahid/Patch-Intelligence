const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors())
app.use(cors({ origin: 'https://patch-intelligence.vercel.app' }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const patchRoutes = require("./routes/patchRoutes")
app.use("/api/patches", patchRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
