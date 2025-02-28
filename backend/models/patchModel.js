const mongoose = require("mongoose");

const PatchSchema = new mongoose.Schema({
    cve_id: String,
    patch_url: String,
    vendor: String,
    known_issues: String,
    failure_rate: Number,
    confidence_score: Number,
    workarounds: String,
    date_released: Date
});

module.exports = mongoose.model("Patch", PatchSchema);
