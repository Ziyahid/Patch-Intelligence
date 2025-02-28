import AddPatchForm from "./components/AddPatchForm";
import PatchTable from "./components/PatchTable";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <PatchTable />
      <AddPatchForm />
    </div>
  );
}

export default App;
