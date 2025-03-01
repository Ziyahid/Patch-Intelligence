import { useState, useEffect } from "react";
import axios from "axios";

function PatchTable() {
  const [patches, setPatches] = useState([]);

  useEffect(() => {
    axios
      .get("https://patch-intelligence-backend.vercel.app/api/patches")
      .then((response) => setPatches(response.data))
      .catch((error) => console.error("Error fetching patches:", error));
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Patch Intelligence Dashboard
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 border">CVE ID</th>
              <th className="py-3 px-4 border">Vendor</th>
              <th className="py-3 px-4 border">Patch URL</th>
              <th className="py-3 px-4 border">Confidence Score</th>
              <th className="py-3 px-4 border">Known Issues</th>
            </tr>
          </thead>
          <tbody>
            {patches.map((patch, index) => (
              <tr key={index} className="text-gray-700 bg-gray-50 hover:bg-gray-100">
                <td className="py-2 px-4 border text-center">{patch.cve_id}</td>
                <td className="py-2 px-4 border text-center">{patch.vendor}</td>
                <td className="py-2 px-4 border text-center">
                  <a href={patch.patch_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Patch
                  </a>
                </td>
                <td className="py-2 px-4 border text-center">{patch.confidence_score}</td>
                <td className="py-2 px-4 border text-center">{patch.known_issues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatchTable;
