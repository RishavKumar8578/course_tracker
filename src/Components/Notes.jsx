import { useState, useEffect } from "react";
import axios from "axios";

// Replace this with your deployed Spring Boot backend URL
const BASE_URL = "https://localhost:8080/api/notes";

const Notes = () => {
  const [note, setNote] = useState("");
  const [noteId, setNoteId] = useState(null);

  // Load note from backend on initial render
  useEffect(() => {
    axios.get(BASE_URL)
      .then((res) => {
        if (res.data.length > 0) {
          const savedNote = res.data[0];
          setNote(savedNote.content);
          setNoteId(savedNote.id);
        }
      })
      .catch((err) => console.error("Error fetching note:", err));
  }, []);

  // Save note to backend
  const handleSave = () => {
    axios.post(BASE_URL, { content: note })
      .then((res) => {
        setNoteId(res.data.id);
        alert("Note saved successfully!");
      })
      .catch((err) => console.error("Error saving note:", err));
  };

  // View (reload) saved note
  const handleViewSaved = () => {
    axios.get(BASE_URL)
      .then((res) => {
        if (res.data.length > 0) {
          const savedNote = res.data[0];
          setNote(savedNote.content);
          setNoteId(savedNote.id);
          alert("Note loaded successfully!");
        } else {
          alert("No saved note found.");
        }
      })
      .catch((err) => console.error("Error viewing note:", err));
  };

  // Delete note
  const handleDelete = () => {
    if (!noteId) {
      alert("No note to delete.");
      return;
    }

    axios.delete(`${BASE_URL}/${noteId}`)
      .then(() => {
        setNote("");
        setNoteId(null);
        alert("Note deleted successfully!");
      })
      .catch((err) => console.error("Error deleting note:", err));
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
