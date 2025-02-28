const express = require("express");
const Patch = require("../models/patchModel");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const patches = await Patch.find();
        res.json(patches);
    } catch (error) {
        res.status(500).json({ error: "Error fetching patches" });
    }
});

router.post("/add", async (req, res) => {
    try {
        const patch = new Patch(req.body);
        await patch.save();
        res.json({ message: "Patch added successfully", patch });
    } catch (error) {
        res.status(500).json({ error: "Error saving patch data" });
    }
});

module.exports = router;
