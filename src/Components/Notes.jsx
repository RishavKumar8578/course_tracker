import { useState, useEffect } from "react";

const Notes = () => {
  const [note, setNote] = useState("");

  // Load saved note from localStorage when the component mounts
  useEffect(() => {
    const savedNote = localStorage.getItem("myNote");
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("myNote", note);
    alert("Note saved successfully!");
  };

  const handleViewSaved = () => {
    const savedNote = localStorage.getItem("myNote");
    if (savedNote) {
      setNote(savedNote);
      alert("Note loaded successfully!");
    } else {
      alert("No saved note found.");
    }
  };

  const handleDelete = () => {
    localStorage.removeItem("myNote");
    setNote("");
    alert("Note deleted successfully!");
  };

  return (
    <div className="min-h-screen px-4 py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">My Notes</h2>

      <textarea
        rows="10"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
        className="w-full max-w-3xl mx-auto p-4 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 block"
      />

      <div className="text-center mt-4 space-x-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition"
        >
          Save Note
        </button>

        <button
          onClick={handleViewSaved}
          className="px-6 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition"
        >
          View Note
        </button>

        <button
          onClick={handleDelete}
          className="px-6 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-red-600 transition"
        >
          Delete Note
        </button>
      </div>
    </div>
  );
};

export default Notes;
