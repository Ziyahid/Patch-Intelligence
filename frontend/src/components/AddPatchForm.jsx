import { useState } from "react";
import axios from "axios";

function AddPatchForm({ onPatchAdded }) {
  const [formData, setFormData] = useState({
    cve_id: "",
    patch_url: "",
    vendor: "",
    known_issues: "",
    failure_rate: "",
    confidence_score: "",
    workarounds: "",
    date_released: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://patch-intelligence-backend.vercel.app/api/patches/add", formData);
      alert("Patch added successfully!");
      onPatchAdded(); // Refresh patch list
      setFormData({
        cve_id: "",
        patch_url: "",
        vendor: "",
        known_issues: "",
        failure_rate: "",
        confidence_score: "",
        workarounds: "",
        date_released: "",
      });
    } catch (error) {
      console.error("Error adding patch:", error);
      alert("Failed to add patch.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mt-6">
      <h2 className="text-xl font-bold text-gray-700 text-center mb-4">Add New Patch</h2>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        {["cve_id", "patch_url", "vendor", "known_issues", "failure_rate", "confidence_score", "workarounds", "date_released"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.replace("_", " ").toUpperCase()}
            value={formData[field]}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        ))}
        <button type="submit" className="col-span-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit Patch
        </button>
      </form>
    </div>
  );
}

export default AddPatchForm;
